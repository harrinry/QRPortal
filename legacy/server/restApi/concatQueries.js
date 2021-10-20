const UNIQ = require('../lib/uniq');
const readFile = require('../lib/readFile');
const path = require('path');
const { restDir } = require('../routes/paths');
const normalize = require('../lib/normalize');
const errLogger = require('../logger/error');

function concatQueries( callback, onError, ...urls ){
  let ret, arr = [];
  const ul = urls.length;
  for (let i = 0; i < ul; i++) {
    const url = urls[i];
    const _path = path.join( ...restDir, normalize(url) );
    readFile( _path, ( p, d, oc ) => onReadData( arr, ret, d, ul, oc ), callback, (err) => {
      errLogger.warn(
        'resource not found',
        {
          statusCode: 404,
          error: 'resource not found',
          resource: _path
        }
      );
      onReadData( arr, ret, [], ul, callback );
    });
  }
}

function onReadData( arr, ret, data, maxLen, callback ){
  arr.push( data );
  if( arr.length === maxLen ) {
    ret = [].concat( ...arr);
    ret = UNIQ( ret, (val) => val.id);
    callback( ret );
  }
}

module.exports = concatQueries;