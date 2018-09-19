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

module.exports = search;