const navData = require('../../lib/navigation-map');
const techData = require('../../lib/technologies-map');
const extensionData = require('../../lib/extensions-map');
const standardsData = require('../../lib/sync-std-map');
const catData = require('../../lib/std-cat-map');
const defMap = {
  std: 'Standards',
  t: 'Technologies',
  srs: 'Packages',
};

function generatePath( secRef, echo ){
  const sec = secRef.split('_'), secl = sec.length,
    def = getDefinition(sec[0]);
  let path = [];
  for (let i = 0; i < secl; i++) {
    const element = sec[i];
    switch (i) {
    case 0:
      path.push(getNavPath(def));
      break;
    case 1:{
      const data = getDefPathFromDefinition(def, element, echo),
        isArr = Array.isArray( data ),
        _data = isArr ? data : [data];
      path.push(..._data);
      break;
    }
    case 2:
      path.push(getEndPoint(def, element, path[1]));
      break;
    default:
      break;
    }
  }

  return path;
}

function getDefinition( secItem ){
  return defMap.hasOwnProperty(secItem) ? defMap[secItem] : false;
}

function getNavPath( mapDef ){
  if( mapDef === defMap.srs ) return { name: 'Packages', href: 'AIP/extensions', icon: '/img/sources.svg' };
  return navData.find( e => e.name === mapDef );
}

function getDefPathFromDefinition( def, id, echo){
  switch (def) {
  case defMap.t:
    return getTechnologyPath(id, echo);  
  case defMap.std:
    return getStandardsPath( id );
  case defMap.srs:
    return getExtensionPath( id );
  default:
    break;
  }
}

function getEndPoint( def, ref ){
  return (def === defMap.std && ref) ? getStdCategoryPath(ref) : undefined;
}

function getTechnologyPath( id, echo ){
  const _id = typeof id === 'string' ? parseInt(id) : id;
  return techData[echo ? 'echo' : 'aip'].find( e => e.id === _id );
}

function getExtensionPath( id ){
  const _id = 'com.castsoftware.' + id.toLowerCase();
  const eMap = extensionData.readExtMap();
  return [extensionData.extensions.find( e => e.id === _id ), eMap[_id] ];
}

function getStandardsPath( stdName ){
  return standardsData.find( e => {
    if( stdName.toLowerCase() === 'cast') return e.name.toLowerCase() === 'health factors';
    else return e.name.toLowerCase() === stdName.toLowerCase();
  });
}

function getStdCategoryPath( stdCat ){
  return catData.find( e => e.name.toLowerCase() === stdCat.toLowerCase());
}

module.exports = generatePath;