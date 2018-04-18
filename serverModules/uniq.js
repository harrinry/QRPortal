module.exports = function getUniqs( arr, cmpFunction ){
  let reg = [];
  let out = new Set();
  arr.forEach( e => {
    let cmpVal = cmpFunction ? cmpFunction( e ) : e;
    if ( reg.indexOf( cmpVal ) === -1 ) {
      reg.push( cmpVal );
      out.add( e );
    }
  });

  return Array.from(out);
};