
function resizeArray( arr, length, defaultValue ){
  const initLength = arr.length;
  arr.length = length;
  
  if( initLength < length ){
    arr.fill(defaultValue, initLength);
  }

  return arr;
}

module.exports = {
  resizeArray,
}