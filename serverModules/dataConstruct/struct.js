module.exports = function Struct( ...composedStructure ){
  const props = composedStructure;
  const len = props.length;

  function constructor(...args){
    for (let i = 0; i < len; i++) {
      this[props[i]] = args[i];
    }
    return this;
  }

  return constructor;
};