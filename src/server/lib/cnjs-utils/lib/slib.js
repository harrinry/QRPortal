function isNull(value){
  return value === undefined || typeof value === "undefined" || value === null;
}

function stringIsNullOrEmpty(value){
  return isNull(value) || stringEmpty(value);
}

function stringEmpty(value){
  if (typeof value !== "string") throw new TypeError("value must be a string");
  return value === "";
}

function isWhitespace(value){
  if (typeof value !== "string") throw new TypeError("value must be a string");

  const bArr = Buffer.from(value);
  const wsArr = Buffer.alloc(bArr.length, 32 /* whitespace */);

  return Buffer.compare(bArr, wsArr) === 0;
}

function stringIsNullOrWhiteSpace(value){
  return isNull(value) || isWhitespace(value);
}

function empty(){
  return "";
}

module.exports = {
  isNull,
  isNullOrEmpty: stringIsNullOrEmpty,
  stringIsNullOrEmpty,
  isEmpty: stringEmpty,
  stringEmpty,
  isWhitespace,
  isNullOrWhiteSpace: stringIsNullOrWhiteSpace,
  stringIsNullOrWhiteSpace,
  empty,
};