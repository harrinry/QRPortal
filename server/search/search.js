function search ( search, arr, reducer ){
  if(search === '') return[];
  let sREG, res = [];
  
  try {
    sREG = new RegExp(search, 'i');
  } catch (error) {
    return[];
  }
  arr.forEach( e => {
    if ( !reducer ){
      if ( e.search(sREG) > -1) {
        res.push(e);
      }
    } else {
      if( reducer( e ).search(sREG) > -1 ){
        res.push(e);
      }
    }
  });

  return res;
}

function searchBy( searchStr, arr, propKey, reducer ){
  if( searchStr === '' ) return [];
  let res = [];
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    const e = reducer ? reducer(arr[i]) : arr[i];
    
    if (!e.hasOwnProperty(propKey)) continue;

    
  }
}

module.exports = {
  search,
  searchBy
};