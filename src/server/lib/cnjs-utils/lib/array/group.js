const { resizeArray } = require("./resize");

function group( arr, size, defaultValue, index = 0, initArr ){
  const outArr = initArr || new Array(Math.ceil( arr.length / size ));
  
  if(arr.length < size && defaultValue !== undefined) resizeArray( arr, size, defaultValue )

  outArr[index] = arr.slice(0, size);
  return (arr.length - size) <= 0 ? outArr : group( arr.slice(size), size, defaultValue, ++index, outArr );
}

module.exports = {
  group,
} 