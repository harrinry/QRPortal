
/**
 * @param {Object} obj
 * @param {string|string[]} objPath
 * @param {import("./read-property-tree").ExploreObjectOptions} options
 */
function rprop( obj = {}, objPath, options = {} ){
  let _prop, final = false;
  options = { default: undefined, returnLast: false, ...options };
  if(!obj) return options.default;
  if( options.returnLast && isPrimative( obj ) ) return obj;

  if( !Array.isArray(objPath) )
    objPath = objPath.split(".");

  if(objPath.length === 0 )
    return obj;

  _prop = isString(objPath[0]) ? objPath[0] : objPath[0].toString();

  if( isOR( _prop ) ){
    for (let prop of getConditions(_prop)) {
      if( isFinal(prop) ) {
        prop = getFinal(prop);
        final = true
      }
      if( isObject(obj) && isProperty( obj, prop ) ) {
        return final ? obj[prop] : rprop( obj[prop], objPath.slice(1), options );
      } else if( isArray( obj ) ){
        const idx = ensureInt( prop );
        if( hasIndex( obj, idx ) ){
          return final ? obj[prop] : rprop( obj[idx], objPath.slice(1), options );
        }
      }
    }
  } else {
    if( isFinal(_prop) ) {
      _prop = getFinal(_prop);
      final = true
    }
    if( isObject(obj) && isProperty( obj, _prop ) ){
      return final ? obj[prop] : rprop( obj[_prop], objPath.slice(1), options );
    } else if( isArray( obj ) ){
      const idx = ensureInt( _prop );
      if( hasIndex( obj, idx ) ){
        return final ? obj[prop] : rprop( obj[idx], objPath.slice(1), options );
      }
    }
  }

  return options.returnLast ? obj : options.default;
}

function isPrimative( val ){
  return typeof val === "string" || typeof val === "boolean" || typeof val === "number";
}

function isString( val ){
  return typeof val === "string";
}

function isFinal( val = "" ){
  return val[val.length - 1] === "!";
}

function getFinal( val ){
  return val.slice(0, val.length - 1);
}

function isObject( obj ){
  return typeof obj === "object" && !isArray(obj) && !isNull(obj);
}

function isNull( val ){
  return val === null || val === undefined;
}

function isProperty( obj, prop ){
  return obj.hasOwnProperty(prop);
}

function isOR( val ){
  return val.indexOf("|") !== -1;
}

function getConditions( val ){
  return val.split("|");
}

function isArray( val ){
  return Array.isArray(val);
}

function hasIndex( arr, idx ){
  return (arr.length -1) >= idx;
}

function ensureInt( val ){
  const parsed = parseInt(val);
  return isNaN(parsed) ? undefined : parsed;
}

module.exports = rprop;