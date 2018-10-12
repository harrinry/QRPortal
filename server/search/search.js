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

function searchBy( searchStr, arr, propKey, middleware ){
  if( searchStr === '' ) return [];
  let res = [];
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    const e = arr[i];
    
    if (!e.hasOwnProperty(propKey)) continue;

    if(e[propKey] == searchStr ) {
      res.push(e);
    }
  }
  return middleware ? middleware(res) : res;
}

module.exports = {
  search,
  searchBy
};