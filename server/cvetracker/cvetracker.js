const mapping = require('./cvemapping/cvemapping.json');

function cvetracker ( query ){
  if( !query ) return;
  return Array.isArray( query ) 
    ? query.reduce((acc, e) => {
      acc[e] = findEntry(e);
      return acc;
    }, {} )
    : findEntry( query );
}

function findEntry( entry ){
  return mapping.find( e => e.cveid.toLowerCase() === entry.toLowerCase() );
}

module.exports = cvetracker;
