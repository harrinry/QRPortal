module.exports = function KeyMap( objectToMap, transform ){
  const __keys = Object.keys( objectToMap ),
    l = __keys.length;

  let o = {
    [Symbol.iterator]: () =>{
      const keys = Object.keys( o );
      let i = 0;
      return {
        next: () =>{
          if (i < keys.length) {
            return { value: keys[i++], done: false };
          }
          return {value: undefined, done: true};
        }
      };
    }
  };

  for (let i = 0; i < l; i++) {
    const key = __keys[i];
    if( transform ){
      o[transform(key)] = key;
    } else {
      o[key] = key;
    }
  }

  return Object.freeze(o);
};