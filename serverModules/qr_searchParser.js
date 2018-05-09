const glob = require('./glob');
const path = require('path');
const rulesDir = path.basename('../quality-rules');
const search = require('./search');
const filter = require('./filters');

let index = [];

function convertToSearchString ( dataObject ) {
  return {
    id: dataObject.id,
    name: dataObject.name,
    searchid: `${dataObject.id} - ${dataObject.name}`,
    technologies: dataObject.technologies,
    resString: dataObject.technologies.map( tech => `${tech.name} : ${dataObject.id} - ${dataObject.name}`)
  };
}

function SearchIndex( query ){
  return search( query, index, ( e ) => e.searchid );
  /*return res.map( e => {
    filter(e.technologies);
    return JSON.stringify(e);
  } );*/
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const initializationTest = () =>{
  const testidx = getRandomInt(index.length),
    test = getRandomInt( 2 ) === 0 ? index[testidx].id : index[testidx].name.substring( /:/g, getRandomInt(index[testidx].name.length) );
  console.log('testquery search : ' + test);
  console.log(SearchIndex(test));
}; 

/* initialization */
(function (){
  glob( rulesDir, ( fileName, contents, i ) => {
    const searchString = convertToSearchString( contents );
    index[i] = searchString ;
  }, ( err ) => {
    throw err;
  }, () => {
    console.log('Search Index created');
    if( process.env.NODE_ENV !== 'production' )initializationTest();
  });
}());

module.exports = SearchIndex;