const fs = require('fs');
const root = require('app-root-path');
const bcMap = require('./business-criteria-map');
const stdMap = require('./sync-std-map').filter(e => e.name.toLowerCase() !== 'cast'),
  stml = stdMap.length;

let map = [
  ...bcMap(undefined, true)
];

for (let i = 0; i < stml; i++) {
  const std = stdMap[i];
  const categories = JSON.parse(fs.readFileSync(root.resolve('rest/' + std.href + '.json')));
  const catMap = categories.map( e => {
    return Object.assign({}, e, {
      standard: std.name,
      icon: createIconString(e.name, std.name)
    });
  }).filter(e => e.name !== 'CWE-3.1');
  map.push(...catMap);
}

function createIconString(name, standardName){
  let _path;
  switch (standardName.toLowerCase()) {
  case 'owasp':
    _path = '/img/' + name.toLowerCase() + '.svg';
    break;
  case 'cwe':
    _path = '/img/' + name.toLowerCase() + '.svg';
    break;
  case 'c-cpp':
    _path = '/img/' + name.toLowerCase() + '.svg';
    break;
  default:
    _path = '/img/' + name.substring(standardName.length).replace(/-/ig,'').toLowerCase() + '.svg';
    break;
  }
  const exists = fs.existsSync(root.resolve('server/images/'+ _path));
  return exists ? _path : 'https://raw.githubusercontent.com/CAST-Extend/resources/master/0.png';
}

module.exports = map;
