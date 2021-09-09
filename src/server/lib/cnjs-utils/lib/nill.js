/**
 * @param {any} val 
 * @returns {boolean}
 */
function nill( val ){
  if( Array.isArray(val) ){
    return val.length === 0;
  } else if( typeof val === "object" ){
    return ( val === null || Object.keys( val ).length === 0 );
  } else if ( typeof val === "string" ){
    return val.trim() === "";
  } else if ( typeof val === "number" && isNaN( val )){
    return true;
  } else if ( typeof val === "function" ){
    try {
      const ret = val();
      return nill( ret );
    } catch (err) {
      return true;
    }
  } else if ( val === undefined ){
    return true;
  }

  return false;
}

module.exports = nill;