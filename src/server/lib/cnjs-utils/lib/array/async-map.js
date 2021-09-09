
function asyncMap( arr, predicate, parallel = false ){
  return parallel 
    ? parallelAsyncMap( arr, predicate )
    : linearAsyncMap( arr, predicate );
}

function parallelAsyncMap( arr, predicate ){
  return Promise.all( arr.map( predicate ) );
}

async function linearAsyncMap( arr, predicate ){
  let al = arr.length, out = new Array(al);

  for (let i = 0; i < al; i++) {
    const e = arr[i];
    const res = await predicate(e, i, arr);
    out[i] = res;
  }

  return out;
}

module.exports = {
  asyncMap,
  parallelAsyncMap,
  linearAsyncMap,
};