
function inArray(arr, e){
  return arr.indexOf(e) !== -1;
}

function hasAnyInArray(arr, arr2){
  for (const e of arr) {
    if (inArray(arr2, e)) {
      return true;
    }
  }
  return false;
}

module.exports = {
  inArray,
  hasAnyInArray,
};