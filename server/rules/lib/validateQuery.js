const standardize = require('./standardizeParams');

function validate( params ){
  params = standardize(params);
  if( !params || (!params.hasOwnProperty('ref') && !params.hasOwnProperty('sec')) ) return true;
  const { sec, ref = '||' } = params,
    refValid = ref.split('|').length === 3 ? true : false,
    _sec = sec.split('_');
  let secValid;

  switch (_sec[0]) {
  case 't':
    secValid = validateTechnology(params);
    break;
  case 'std':
    secValid = validateStandard(params);
    break;
  case 'srs':
    secValid = validateExtension(params);
    break;
  default:
    secValid = false;
    break;
  }
  return refValid && secValid ? true : false;
}

function validateExtension( params ){
  const { sec, ref } = params,
    extMap = require('../../lib/extensions-map').readExtMap(),
    _sec = sec.split('_'),
    _ref = ref.split('|'),
    id = 'com.castsoftware.' + _sec[1].toLowerCase();
  if (extMap.hasOwnProperty(id)) {
    const version = extMap[id].find( e => e.name === _ref[2]);
    return version ? true : false;
  }
  return false;
}

function validateTechnology( params ){
  const { sec } = params,
    tMap = require('../../lib/technologies-map'),
    _sec = sec.split('_'),
    techId = parseInt(_sec[1]);

  return tMap.find( t => t.id === techId ) ? true : false;
}

function validateStandard( params ){
  const { sec } = params,
    _sec = sec.split('_'),
    bMap = require('../../lib/std-cat-map'),
    id = _sec[2],
    foundID = id 
      ? (bMap.find( e => e.name.toLowerCase() === id.toLowerCase()) ? true : false )
      : undefined;

  return foundID;
}

module.exports = validate;