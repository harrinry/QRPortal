
function asyncReduce( arr, predicate, initialValue, parallel = false ){
  return parallel
    ? parallelAsyncReduce( arr, predicate, initialValue )
    : linearAsyncReduce( arr, predicate, initialValue );
}
  

function parallelAsyncReduce( arr = [], predicate, initialValue ){
  const acc = initialValue, al = arr.length, p_res = new Array(al);

  for (let i = 0; i < al; i++) {
    const x = arr[i];
    p_res[i] = predicate(acc, x, i, arr );
  }

  return new Promise( ( resolve, reject ) => {
    Promise.all(p_res)
      .then( () => resolve(acc) )
      .catch( err => reject(err));
  });
}

async function linearAsyncReduce( arr, predicate, initialValue ){
  let al = arr.length, acc = initialValue;
  for (let i = 0; i < al; i++) {
    const e = arr[i];
    await predicate(acc, e, i, arr);
  }
  return acc;
}

module.exports = { 
  asyncReduce,
  parallelAsyncReduce,
  linearAsyncReduce,
};