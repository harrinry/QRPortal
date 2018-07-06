module.exports = function getUniqs( arr, cmpFunction ){
  let reg = [];
  let out = new Set();
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const e = arr[i];
    const cmpVal = cmpFunction ? cmpFunction( e ) : e;
    if ( reg.indexOf( cmpVal ) === -1 ) {
      reg.push( cmpVal );
      out.add( e );
    }
  }
  return Array.from(out);
};