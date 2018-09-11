const fs = require('fs');
const root = require('app-root-path');
const validExtensions = getValidExtensionMap();
const eLength = validExtensions.length;

function getValidExtensionMap(){
  const extensions = require('../../rest/AIP/extensions.json').filter( e => e.qualityModel === true );
  const castAIP = {
    name: 'CAST AIP',
    href: 'AIP/versions.json',
    icon: 'https://raw.githubusercontent.com/CAST-Extend/resources/master/com.castsoftware.aip.png'
  };
  const ext = extensions.map( ext => {
    const path =  root.resolve('rest/AIP/extensions/'+ ext.name +'.json'),
      extentionDetails = JSON.parse(fs.readFileSync(path));
    return Object.assign({}, ext, { title: extentionDetails.title, icon: 'https://raw.githubusercontent.com/CAST-Extend/resources/master/'+ ext.name +'.png', id: ext.name, name: cleanExtentionName(extentionDetails.title) });
  });
  return [castAIP, ...ext];
}

function cleanExtentionName ( name ) {
  const wordsToClean = [' technology',' Linker','Angular/', 'for ', 'for Java', 'Techonology Extension For' ,'Technology Extension For ', ' Framework', 'Support of ', 'Technology Extension' ], 
    cl = wordsToClean.length,
    exceptionNames = ['System Level Rules', 'Web Services', 'CAST AIP'];
  let cleanName = name;
  for (let i = 0; i < cl; i++) {
    const wordToRemove = wordsToClean[i];
    cleanName = cleanName.replace(wordToRemove, '');
  }
  return (cleanName.includes('Analyzer') || exceptionNames.indexOf(cleanName) !== -1) ? cleanName : cleanName + ' Analyzer' ;
}

function INIT (){
  let extVersionMap = {};
  const EXTMAP = fs.createWriteStream(root.resolve('/temp/extensions-map.json'));
  for (let i = 0; i < eLength; i++) {
    const ext = validExtensions[i];
    if (ext.name === 'CAST AIP') continue;
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
  if (!fs.existsSync(_path)) return;
  return JSON.parse( fs.readFileSync(_path));
}

module.exports = {
  INIT: INIT,
  readExtMap: readExtMap,
  extensions: validExtensions,
};