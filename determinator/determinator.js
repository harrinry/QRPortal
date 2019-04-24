const queryParser = require('./queryParser');
const { queryKey } = require('./constants');
const matcher = require('./matcher');
//const getRecomendedVersion = require('./latestVersion');

function determinator ( query ){
  if( !query ) return;
  const keyWords = queryParser( query, queryKey ),
    len = keyWords.length;

  let ret = {};

  for (let i = 0; i < len; i++) {
    const matching = matcher( keyWords[i] );
    if (matching) {
      const extUID = matching.extensionuid;
      ret[keyWords[i]] = matching ;
      //ret[keyWords[i]].recomendedversion = getRecomendedVersion(extUID);
    }
  }

  return ret;
}

module.exports = determinator;
