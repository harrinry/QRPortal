const mapping = require('./technomapping/technoanalyzermapping.json');
const analyzers = require('./technomapping/analyzers.json');

function Match( key ){
  const matchKey = getMatchKey( key );
  switch (key) {
  case '*':
    return analyzers;  
  default:
    return analyzers.find( a => a.id === matchKey );
  }
}

function getMatchKey( key ){
  return mapping[key];
}

module.exports = Match;