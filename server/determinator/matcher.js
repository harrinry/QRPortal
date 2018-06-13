const mapping = require('./technomapping/technoanalyzermapping.json');
const analyzers = require('./technomapping/analyzers.json');

function Match( key ){
  const matchKey = getMapping( key );
  if (!matchKey) return;
  const analyzerKey = matchKey.analyzer;
  switch (key) {
  case '*':
    return analyzers;  
  default:
    return appenedAdditionalInfo(findAnalyzer( analyzerKey ), matchKey);
  }
}

function findAnalyzer( key ){
  return analyzers.find( a => a.id === key );
}


function getMapping( key ){
  return mapping[key];
}

function appenedAdditionalInfo( analyzer, matchKey ){
  const { type, techno } = matchKey;
  return Object.assign({},
    analyzer,
    {type},
    {techno});
}

module.exports = Match;