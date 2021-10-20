const map = require('./technoanalyzermapping.json');
const analyzers = require('./analyzers.json');
const fs = require('fs');

const keys = Object.keys(map);
const _keys = keys.filter( k => map[k].hasOwnProperty('analyzer'));

const merged = _keys.map( k => {
  const key = map[k];
  const a = analyzers.find( e => e.id === key.analyzer );

  try{
    let p = {
      Technology: key.techno,
      Dataaccess: key.hasOwnProperty('type') && key.type.indexOf('dataaccess') > -1 ? true : false,
      Language: key.hasOwnProperty('type') && key.type.indexOf('language') > -1 ? true : false,
      Presentation: key.hasOwnProperty('type') && key.type.indexOf('presentation') > -1 ? true : false,
      Webservices: key.hasOwnProperty('type') && key.type.indexOf('webservices') > -1 ? true : false,
      Messaging: key.hasOwnProperty('type') && key.type.indexOf('messaging') > -1 ? true : false,
      aip: a.aip,
      id: a.extensionuid,
      Technologykey: k,
      Minversion: a.minversion
    };
    return p;
  } catch( err ){
    console.log(err, key);
  }
});

fs.writeFileSync('./det-merge.json', JSON.stringify(merged, null, 2), {encoding: 'utf8'});