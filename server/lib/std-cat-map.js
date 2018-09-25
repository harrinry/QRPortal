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
      icon: ( std.name.toLowerCase() === 'owasp' ? 
        '/img/' + e.name.toLowerCase() + '.svg' : 
        '/img/' + e.name.substring(std.name.length).replace(/-/ig,'').toLowerCase() + '.svg' ) 
    });
  });

  map.push(...catMap);
}

module.exports = map;