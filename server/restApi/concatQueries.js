const UNIQ = require('../lib/uniq');
const path = require('path');
const { restDir } = require('../lib/constants');

function concatQueries( ...urls ){
  let ret;
  if (Array.isArray(urls)) {
    const arr = urls.map( url => require( path.join( ...restDir, url ) ));
    ret = [].concat(...arr);
    ret = UNIQ( ret, (val) => val.id );
  }
  return ret;
}

module.exports = concatQueries;