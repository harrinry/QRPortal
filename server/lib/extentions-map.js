const fs = require('fs');
const root = require('app-root-path');
const validExtensions = require('../../rest/AIP/extensions.json').filter( e => e.qualityModel === true );
const eLength = validExtensions.length;

function INIT (){
  let extVersionMap = {};
  const EXTMAP = fs.createWriteStream(root.resolve('/temp/extensions-map.json'));
  for (let i = 0; i < eLength; i++) {
    const ext = validExtensions[i];
    const versions = JSON.parse(fs.readFileSync(root.resolve('rest/' + ext.href + '/versions.json')));
    const versionsWithRules = versions.filter( ver => {
      const file = JSON.parse(fs.readFileSync( root.resolve( 'rest/'+ ver.href+'.json' )));
      if (file.qualityModel === true ) return ver;
    });
    extVersionMap[ext.href] = versionsWithRules;
  }
  EXTMAP.write(JSON.stringify(extVersionMap, null, 2));
  EXTMAP.end(() => console.log('extensions-map created/updated'));
}

function readExtMap(){
  const _path = root.resolve('/temp/extensions-map.json');
  if (!fs.existsSync(_path)) INIT();
  return JSON.parse( fs.readFileSync(_path));
}

module.exports = {
  INIT: INIT,
  readExtMap: readExtMap,
  extensions: validExtensions,
};