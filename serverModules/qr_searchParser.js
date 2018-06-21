const glob = require('./glob');
const path = require('path');
const rootMetricsDir  = 'rest/';
const rulesDir = path.resolve('rest/AIP/quality-rules');
const search = require('./search');
const filter = require('./filters');
const QS = require('../rest/AIP/quality-standards.json');

const readJsonFile = require('../serverModules/readFile');

let index = {
  qualityRules: [],
  qualityStandards: []
};

function convertToSearchString ( dataObject, fileName ) {
  const technos = filter(dataObject.technologies);
  return {
    id: dataObject.id,
    name: dataObject.name,
    href: 'quality-rules/' + fileName,
    searchid: `${dataObject.id} - ${dataObject.name}`,
    technologies: dataObject.technologies,
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
  case 'qualityRules':
    return search( query, index[ indexDef ], ( e ) => e.searchid );
  case 'qualityStandards':
    return index.qualityStandards.find( e => e.id === query );
  }
  
  /*return res.map( e => {
    filter(e.technologies);
    return JSON.stringify(e);
  } );*/
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const QRinitializationTest = () =>{
  const testidx = getRandomInt(index.qualityRules.length),
    test = getRandomInt( 2 ) === 0 ? index.qualityRules[testidx].id : index.qualityRules[testidx].name.substring( /:/g, getRandomInt(index.qualityRules[testidx].name.length) );
  console.log('testquery search : ' + test);
  console.log(SearchIndex(test, 'qualityRules'));
}; 

const QSinitializationTest = () => {
  const testidx = getRandomInt(index.qualityStandards.length),
    test = index.qualityStandards[testidx].id;
  console.log('testquery search : ' + test);
  console.log(SearchIndex(test, 'qualityStandards'));
};

/* initialization */
(function (){
  glob( rulesDir, ( fileName, contents, i ) => {
    const searchString = convertToSearchString( contents, fileName );
    index.qualityRules[i] = searchString ;
  }, ( err ) => {
    throw err;
  }, () => {
    console.log('Quality Rules Search Index created');
    if( process.env.NODE_ENV !== 'production' )QRinitializationTest();
  });
  let qsi = 0;
  QS.forEach((std) => {
    readJsonFile(rootMetricsDir + "/AIP/quality-standards/" + std.name + "/items.json", ( name, content ) => {
      content.forEach( fLink => {
        if (fLink.count == 0) return;
        readJsonFile( rootMetricsDir + "/AIP/quality-standards/" + std.name + "/items/" + fLink.id + "/quality-rules.json", ( n, c ) => {
          c.forEach( o => {
            const indexObj = convertQsToSearchIndex( o, fLink );
            index.qualityStandards[qsi++] = indexObj;
          } );
        }, undefined, ( e ) => {
          throw e;
        });
      });
    }, undefined, ( e ) => {
      throw e;
    });
  });
}());

setTimeout(() => {
  console.log('Quality Standards Search Index created');
  if( process.env.NODE_ENV !== 'production' )QSinitializationTest();
}, 1000);

module.exports = SearchIndex;