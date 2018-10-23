const glob = require('../lib/glob');
const path = require('path');
const fs = require('fs');
const root = require('app-root-path');
const rulesDir = path.resolve( __dirname, '..','..', 'rest','AIP', 'quality-rules');
const {search, searchBy} = require('./search');
const UniqueArray = require('../lib/uniq');
//const QS = require('../../rest/AIP/quality-standards.json');
const technoMapping = require('../lib/technologies-map');
const errLogger = require('../logger/error');
//const readJsonFile = require('../lib/readFile');

let index = {
  qualityrules: [],
  standards: []
};

const MapTechnology = (technology) => {

  const technologyIndexInMap = technoMapping.findIndex(t => t.name === technology),
    tl = technoMapping.length;

  if (technologyIndexInMap > -1) {
    return technoMapping[technologyIndexInMap];
  }

  for (let i = 0; i < tl; i++) {
    const _Technology = technoMapping[i];
    if (_Technology.glob === null) continue;
    const globIndex = _Technology.glob.findIndex( t => t.name === technology);
    
    if( globIndex > -1 ) return _Technology;
  }

  return null;
};

function convertToSearchString ( dataObject, fileName ) {
  const technos = dataObject.technologies;
  const qsString = dataObject.qualityStandards.map( qs => qs.id ).join(' ');
  return {
    id: dataObject.id,
    name: dataObject.name,
    critical: dataObject.critical,
    href: 'AIP/quality-rules/' + fileName,
    searchid: `${dataObject.id} - ${qsString} - ${dataObject.name}`,
    technologies: UniqueArray(technos.map( tech => MapTechnology(tech.name)).filter(e => e !== undefined && e !== null), (val) => val.name), 
    resString: technos.map( tech => `${tech.name} : ${dataObject.id} - ${dataObject.name}`),
  };
}

// function convertQsToSearchIndex( dataObject, par ){
//   return {
//     id: dataObject.id,
//     searchid: dataObject.id,
//     name: par.name,
//     resHref: par.href
//   };
// }

function SearchIndex( query, indexDef ){
  switch (indexDef) {
  case 'qualityrules':
    return search( query, index[ indexDef ], ( e ) => e.searchid ).sort((a,b)=> a.id - b.id);
  case 'standards':
    return findQualityStandard( query.toLowerCase() );
  case 'qualityrulesbyid':
    return searchBy(query, index.qualityrules, 'id').sort((a,b)=> a.id - b.id);
  default:{
    const err = {
      module: 'search',
      index: indexDef,
      query: query,
      errortype: 'index not found',
      errorcode: 404
    };
    errLogger.error(err);
    return err;
  }
  }
}

function findQualityStandard( standardID ){
  return index.standards.hasOwnProperty(standardID) ? index.standards[standardID] : [];
}

const createUniqueTechnologiesArray = ( technologiesArray )=>{
  return UniqueArray(technologiesArray.map( tech => MapTechnology(tech.name)).filter(e => e !== undefined && e !== null), (val) => val.name);
};

/* initialization */
(function (){
  glob( rulesDir, ( fileName, contents, i ) => {
    const searchString = convertToSearchString( contents, fileName );
    index.qualityrules[i] = searchString ;
  }, ( err ) => {
    throw err;
  }, () => {
    console.log('Quality Rules Search Index created');
    //if( process.env.NODE_ENV !== 'production' )QRinitializationTest();
  });

  const standards = {
    cisq: 'CISQ',
    owasp: 'OWASP',
    //cwe: 'CWE'
  };
  const standardsList = [
      ...require(root.resolve('/rest/AIP/quality-standards/'+standards.cisq+'/items.json')).map( e => {
        return {
          id: e.id,
          href: e.href + '/quality-rules.json',
          count: e.count,
          searchid: `${standards.cisq} - ${e.id}`
        };
      }),
      ...require(root.resolve('/rest/AIP/quality-standards/'+standards.owasp+'/items.json')).map( e => {
        return {
          id: e.id,
          href: e.href + '/quality-rules.json',
          count: e.count,
          searchid: `${standards.owasp} - ${e.id}`
        };
      })/*,
      ...require(root.resolve('/rest/AIP/quality-standards/'+standards.cwe+'/items.json')).map( e => {
        return {
          id: e.id,
          href: e.href + '/quality-rules.json',
          count: e.count,
          searchid: `${standards.cwe} - ${e.id}`
        };
      })*/],
    SLL = standardsList.length;

  for (let i = 0; i < SLL; i++) {
    const std = standardsList[i],
      stdList = JSON.parse(fs.readFileSync(root.resolve('rest/'+std.href))),
      stdListRemap = stdList.map( e => {
        const rawRuleData = fs.readFileSync(root.resolve('rest/' + e.href + '.json')),
          rulesData = JSON.parse(rawRuleData);
        return Object.assign({}, e, { searchid: std.searchid + ' - ' + e.id, technologies: createUniqueTechnologiesArray(rulesData.technologies) });
      });
    index.standards[std.id.toLowerCase()] = stdListRemap;
  }
  console.log('created Standards Index');
}());

module.exports = SearchIndex;