const glob = require('../lib/glob');
const path = require('path');
const rootMetricsDir  = path.resolve( __dirname, '..','..', 'rest');
const rulesDir = path.resolve( __dirname, '..','..', 'rest', 'quality-rules');
const search = require('./search');
const filter = require('../lib/filters');
const QS = require('../../rest/quality-standards.json');
const technoMapping = require('../lib/technologies-map');
const errLogger = require('../logger/error');

const readJsonFile = require('../lib/readFile');

let index = {
  qualityrules: [],
  qualitystandards: []
};

function convertToSearchString ( dataObject, fileName ) {
  const technos = filter(dataObject.technologies);
  return {
    id: dataObject.id,
    name: dataObject.name,
    href: 'quality-rules/' + fileName,
    searchid: `${dataObject.id} - ${dataObject.name}`,
    technologies: technos.map( tech => technoMapping.find( tch => tech.name === tch.name)),
    resString: technos.map( tech => `${tech.name} : ${dataObject.id} - ${dataObject.name}`)
  };
}

function convertQsToSearchIndex( dataObject, par ){
  return {
    id: dataObject.id,
    searchid: dataObject.id,
    name: par.name,
    resHref: par.href
  };
}

function SearchIndex( query, indexDef ){
  switch (indexDef) {
  case 'qualityrules':
    return search( query, index[ indexDef ], ( e ) => e.searchid );
  case 'qualitystandards':
    return index.qualitystandards.find( e => e.id === query );
  default:
    errLogger.error({
      module: 'search',
      index: indexDef,
      query: query,
      errortype: 'index not found',
      errorcode: 404
    });
    break;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const QRinitializationTest = () =>{
  const testidx = getRandomInt(index.qualityrules.length),
    test = getRandomInt( 2 ) === 0 ? index.qualityrules[testidx].id : index.qualityrules[testidx].name.substring( /:/g, getRandomInt(index.qualityrules[testidx].name.length) );
  console.log('testquery search : ' + test);
  console.log(SearchIndex(test, 'qualityRules'));
}; 

const QSinitializationTest = () => {
  const testidx = getRandomInt(index.qualitystandards.length),
    test = index.qualitystandards[testidx].id;
  console.log('testquery search : ' + test);
  console.log(SearchIndex(test, 'qualitystandards'));
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
  let qsi = 0;
  QS.forEach((std) => {
    readJsonFile(path.join(rootMetricsDir, std.href), ( name, content ) => {
      content.forEach( fLink => {
        readJsonFile( path.join(rootMetricsDir, fLink.href), ( n, c ) => {
          c.forEach( o => {
            const indexObj = convertQsToSearchIndex( o, fLink );
            index.qualitystandards[qsi++] = indexObj;
          } );
        }, undefined, ( e ) => {
          errLogger.error( e );
        });
      });
    }, undefined, ( e ) => {
      errLogger.error( e );
    });
  });
}());

setTimeout(() => {
  console.log('Quality Standards Search Index created');
  if( process.env.NODE_ENV !== 'production' )QSinitializationTest();
}, 1000);

module.exports = SearchIndex;