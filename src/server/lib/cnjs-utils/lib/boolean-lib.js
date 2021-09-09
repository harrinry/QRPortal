function fromString(val){
  if (val === "1" || val.toLowerCase() === "true") { 
    return true; 
  } else return false;
}

function fromNumber(val){
  return val === 1;
}

function parseBool(value){
  if (typeof value === "string") { 
    return fromString(value); 
  } else if (typeof value === "number") { 
    return fromNumber(value); 
  } else if (typeof value === "boolean") { 
    return value; 
  } else return undefined;
}

function parseBoolDefaultTrue(value){
  return value === undefined ? true : parseBool(value);
}

function parseBoolDefaultFalse(value){
  return value === undefined ? false : parseBool(value);
}

function boolOrNull(value){
  return value === true || value === false ? value : null;
}

module.exports = {
  parseBool,
  parseBoolDefaultTrue,
  parseBoolDefaultFalse,
  boolOrNull,
};