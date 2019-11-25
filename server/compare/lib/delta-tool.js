const uniqueArray = require('../../lib/uniq');
const generateVersionLabel = require('../../lib/versionNamePP');

const fs = require('fs');
const path = require('path');
const util = require('util');

const root = path.resolve(__dirname, '..', '..', '..', 'rest', 'AIP' );

// Utility functions ----------------------------------------------------------------------------------

/**
 * @param {any} val 
 * @returns {boolean}
 */
function isNill( val ){
  if( Array.isArray(val) ){
    return val.length === 0;
  } else if( typeof val === 'object' ){
    return ( val === null || Object.keys( val ).length === 0 );
  } else if ( typeof val === 'string' ){
    return val.trim() === '';
  } else if ( typeof val === 'number' && isNaN( val ) ){
    return true;
  } else if ( typeof val === 'function' ){
    try {
      const ret = val();
      return isNill( ret );
    } catch (err) {
      return true;
    }
  } else if ( val === undefined ){
    return true;
  }

  return false;
}

/**
 * @param {string} extId 
 * @param {string} version
 * @returns {Promise<any>}
 */
function getVersionInfoPath( extId, version ){
  return isAIP( extId ) 
    ? path.join( root, 'versions', `${version}.json`)
    : path.join( root, 'extensions', extId, 'versions', `${version}.json` );
}

/**
 * @param {string} extId 
 * @param {string} version
 * @returns {Promise<any>}
 */
function getVersionQRPath( extId, version ){
  return isAIP( extId ) 
    ? path.join( root, 'versions', version, 'quality-rules.json')
    : path.join( root, 'extensions', extId, 'versions', version, 'quality-rules.json');
}

/**
 * @param {string} extId 
 * @returns {boolean}
 */
function isAIP( extId ){
  return !isNill( extId ) && extId.toLowerCase() === 'com.castsoftware.aip';
}

/** @param {string} pathLike @returns {Promise<any>} */
function readJsonFile( pathLike ){
  return util.promisify(fs.stat)(pathLike)
    .then( () => util.promisify(fs.readFile)(pathLike) )
    .then( data => {
      return JSON.parse(data);
    })
    .catch( () => null);
}

// -------------------------------------------------------------------------------------------------

/**
 * @typedef VersionInfoData
 * @property {number!} transactionsConfigurationCRC
 * @property {number!} metaModelCRC
 * @property {number!} rulesCRC
 */

/**
 * @typedef RuleLink
 * @property {number} id
 * @property {string} name
 * @property {string} href
 * @property {"renewed"|"added"|"removed"} status
 * @property {boolean} critical
 * @property {string[]} technologyNames
 */

/**
 * @typedef RuleDiff
 * @property {[string, string]} versions
 * @property {number} added
 * @property {number} removed
 * @property {number} renewed
 * @property {}
 */

/**
 * 
 * @param {VersionInfoData} versionInfo1 
 * @param {VersionInfoData} versionInfo2 
 */
function compareCRC( versionInfo1, versionInfo2 ){
  return {
    transaction: versionInfo1.transactionsConfigurationCRC !== versionInfo2.transactionsConfigurationCRC,
    metaModel: versionInfo1.metaModelCRC !== versionInfo2.metaModelCRC,
    rules: versionInfo1.rulesCRC !== versionInfo2.rulesCRC,
  };
}

/**
 * @param {{version: string, rules: RuleLink[]}} rulesArr1 
 * @param {{version: string, rules: RuleLink[]}} rulesArr2
 */
function compareRules( rulesArr1, rulesArr2 ){
  const res = {};

}

/**
 * @param {string} extid 
 * @param {string} version1 
 * @param {string} version2
 */
async function versionUpgradeDelta( extid, version1, version2 ){
  const ver1 = await readJsonFile( getVersionInfoPath( extid, version1 ) ),
    ver2 = await readJsonFile( getVersionInfoPath( extid, version2 ) );

  if( !ver1 || !ver2 ) return null;

  return compareCRC( ver1, ver2 );
}

module.exports = {
  versionUpgradeDelta,
};