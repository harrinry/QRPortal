const queryParser = require('../lib/queryParser');
const { queryKey } = require('./constants');
const matcher = require('./matcher');
const getRecommendedVersion = require('./latestVersion');
const logger = require('../logger/determinator');

function determinator ( query ){
  if( !query ) return;
  const keyWords = queryParser( query, queryKey ),
    len = keyWords.length;
  let stats = {
    originalquery: keyWords,
    matched: [],
    notsupported: []
  };
  let ret = {};
  
  for (let i = 0; i < len; i++) {
    const matching = matcher( keyWords[i].toLowerCase() );
    if (matching) {
      const extUID = matching.extensionuid;
      ret[keyWords[i]] = matching ;
      ret[keyWords[i]].recommendedversion = getRecommendedVersion(extUID);
      stats.matched.push(keyWords[i]);
    } else {
      ret[keyWords[i]] = {id: null, errormessage: 'Technology not supported' };
      stats.notsupported.push(keyWords[i]);
    }
  }
  logger.info(stats);
  return ret;
}

module.exports = determinator;