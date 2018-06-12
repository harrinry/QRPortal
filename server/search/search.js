function search ( search, arr, reducer ){
  const sREG = new RegExp(search, 'i'),
    res = [];

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