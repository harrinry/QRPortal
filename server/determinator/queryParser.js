function parseQuery( queryObj, key ){
  const query = queryObj[key];
  return splitOnSpace( query );
}

/*function getMainKey( queryObj ){
  const keys = Object.keys(queryObj);
  return keys.length > 0 ? keys[0] : undefined;
}*/

function splitOnSpace( string ){
  const space = /\s/g;
  return string ? string.split(space) : [];
}

module.exports = parseQuery;