const path = require('path');
const { extPath, versionTypes } = require('./constants');
const logger = require('../logger/error');

function getLatestVersion( analyzerUID ){
  if( !analyzerUID ) return;
  
  let versions, len, latestLTS, funcRelVersion, latestBeta, latestAlpha;
  const PATH = path.join(extPath, analyzerUID, 'versions.json');
  try {
    versions = require( PATH ),
    len = versions ? versions.length : 0;
  } catch (error) {
    logger.error({
      module: 'determinator', 
      error: 'Version file missing',
      analyzerUID: analyzerUID,
      fullPath: PATH
    });
    return null;
  }

  for (let i = 0; i < len; i++) {
    const version = versions[i].name;
    if (isLTS( version )) {
      latestLTS = latestLTS ? vCompare( latestLTS, version ) : version;
    } else if( isFuncRel( version ) ){
      funcRelVersion = funcRelVersion ? vCompare( funcRelVersion, version ) : version;
    } else if ( isBeta( version ) ){
      latestBeta = latestBeta ? vCompare( latestBeta, version ) : version;
    } else if( isAlpha( version ) ){
      latestAlpha = latestAlpha ? vCompare( latestAlpha, version ) : version;
    }
  }

  if (latestLTS) return latestLTS;
  else if( funcRelVersion ) return funcRelVersion;
  else if( latestBeta ) return latestBeta;
  else if( latestAlpha ) return latestAlpha;
  else return null;
}

function isLTS( version ){
  const reg = /(funcrel)|(beta)|(alpha)/gi;
  return reg.test( version ) ? false : true;
}

function isFuncRel( version ){
  const reg = /(funcrel)/gi;
  return reg.test( version ) ? true : false;
}

function isBeta( version ){
  const reg = /(beta)/gi;
  return reg.test( version ) ? true : false;
}

function isAlpha( version ){
  const reg = /(alpha)/gi;
  return reg.test( version ) ? true : false;
}

function vCompare( v1, v2 ){
  const _v1 = parseVersion(v1),
    _v2 = parseVersion(v2);
  
  if ( _v1 > _v2 ) {
    return v1;
  } else if ( _v1 < _v2 ){
    return v2;
  }
}

function parseVersion( version ){
  const type = getVersionType(version);
  const subVersion = (type === versionTypes.LTS || type === versionTypes.FUNCREL) ? 0 : getSecondaryVersion(version);
  return getMainVersion(version) * 10 + subVersion;
}

function getVersionType( version ){
  if(isLTS(version)) return versionTypes.LTS;
  else if(isFuncRel(version)) return versionTypes.FUNCREL;
  else if(isBeta(version)) return versionTypes.BETA;
  else if(isAlpha(version)) return versionTypes.ALPHA;
  else return undefined;
}

function getMainVersion( version ){
  const versionArr = version.split('-');
  return parseInt(versionArr[0].replace(/\./g, ''));
}

function getSecondaryVersion( version ){
  const versionArr = version.split('-'),
    reg = /[0-9]/g;
  return versionArr.length > 1 ? parseInt(versionArr[1].match( reg )) : 0;
}

module.exports = getLatestVersion;