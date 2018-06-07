const queryParser = require('./queryParser');
const { queryKey } = require('./constants');
const matcher = require('./matcher');

function determinator ( query ){
  if( !query ) return;
  const keyWords = queryParser( query, queryKey ),
    len = keyWords.length;
  
  let ret = [];
  
  for (let i = 0; i < len; i++) {
    const matching = matcher( keyWords[i] );
    if (matching && ret.indexOf( matching ) === -1) ret.push( matching );
  }

  return ret;
}

module.exports = determinator;