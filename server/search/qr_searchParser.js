const glob = require('../lib/glob');
const path = require('path');
const fs = require('fs');
const root = require('app-root-path');
const rulesDir = path.resolve( __dirname, '..','..', 'rest','AIP', 'quality-rules');
const search = require('./search');
const filter = require('../lib/filters');
//const QS = require('../../rest/AIP/quality-standards.json');
const technoMapping = require('../lib/technologies-map');
const errLogger = require('../logger/error');
//const readJsonFile = require('../lib/readFile');

let index = {
  qualityrules: [],
  standards: []
};

function convertToSearchString ( dataObject, fileName ) {
  const technos = filter(dataObject.technologies);
  const qsString = dataObject.qualityStandards.map( qs => qs.id ).join(' ');
  return {
    id: dataObject.id,
    name: dataObject.name,
    critical: dataObject.critical,
    href: 'AIP/quality-rules/' + fileName,
    searchid: `${dataObject.id} - ${qsString} - ${dataObject.name}`,
    technologies: technos.map( tech => technoMapping.find( tch => tech.name === tch.name)),
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
    return search( query, index[ indexDef ], ( e ) => e.searchid );
  case 'standards':
    return findQualityStandard( query.toLowerCase() );
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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const QRinitializationTest = () =>{
  const testidx = getRandomInt(index.qualityrules.length),
    test = getRandomInt( 2 ) === 0 ? index.qualityrules[testidx].id : index.qualityrules[testidx].name.substring( /:/g, getRandomInt(index.qualityrules[testidx].name.length) );
  console.log('testquery search : ' + test);
  console.log(SearchIndex(test, 'qualityrules'));
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
    if( process.env.NODE_ENV !== 'production' )QRinitializationTest();
  });

  const standards = {
    cisq: 'CISQ',
    owasp: 'OWASP',
    cwe: 'CWE'
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
      }),
      ...require(root.resolve('/rest/AIP/quality-standards/'+standards.cwe+'/items.json')).map( e => {
        return {
          id: e.id,
          href: e.href + '/quality-rules.json',
          count: e.count,
          searchid: `${standards.cwe} - ${e.id}`
        };
      })],
    SLL = standardsList.length;

  for (let i = 0; i < SLL; i++) {
    const std = standardsList[i],
      stdList = JSON.parse(fs.readFileSync(root.resolve('rest/'+std.href))),
      stdListRemap = stdList.map( e => {
        return Object.assign({}, e, { searchid: std.searchid + ' - ' + e.id });
      });
    index.standards[std.id.toLowerCase()] = stdListRemap;
  }
  console.log('created Standards Index');
}());

module.exports = SearchIndex;