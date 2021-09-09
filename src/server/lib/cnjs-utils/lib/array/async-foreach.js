
function asyncForEach( arr, predicate, parallel = false ){

  return parallel 
    ? parallelAsyncForEach( arr, predicate )
    : linearAsyncForEach( arr, predicate )
}

async function linearAsyncForEach( arr, predicate ){
  const al = arr.length;

  for (let i = 0; i < al; i++) {
    const x = arr[i];
    await predicate( x, i, arr );
  }
}

function parallelAsyncForEach( arr, predicate ){
  const al = arr.length, p_res = new Array(al);

  for (let i = 0; i < al; i++) {
    const x = arr[i];
    p_res[i] = predicate( x, i, arr );
  }

  return Promise.all(p_res).then(() => undefined);
}

module.exports = {
  asyncForEach,
  parallelAsyncForEach,
  linearAsyncForEach,
};