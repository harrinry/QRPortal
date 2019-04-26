const mapping = require('./cvemapping/cvemapping.json');

function cvetracker ( query ){
  if( !query ) return;

  const keys = Object.keys(query);

  let matching = {};

  for(var elt in mapping) {

    if(mapping[elt].cveid === keys[0])
    {
      matching = mapping[elt];
      break;
    }
  }

  if (matching) {
      return matching;
  }
}

module.exports = cvetracker;
