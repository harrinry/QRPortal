
const { getPrototypeOf, defineProperty } = Object;

function bindHelper( fn, context ){
  if (fn.bind) {
    return fn.bind(context);
  } else {
    return function $autobind() {
      return fn.apply(context, arguments);
    };
  }
}


function AutoBind( target, key, { value: fn, configurable, enumerable }){

  if (typeof fn !== 'function') {
		throw new TypeError(`@autoBindMethod decorator can only be applied to methods not: ${typeof fn}`);
  }

  const { constructor } = target;
  
  return {
    configurable,
    enumerable,

    get(){

      if( this === target ){
        return fn;
      }

      if( this.constructor !== constructor && getPrototypeOf( this ).constructor === constructor ){
        return fn;
      }

      const boundFn = bindHelper( fn, this );

      defineProperty( this, key, {
        configurable: true,
        writable: true,
        enumerable: false,
        value: boundFn,
      });

      return boundFn;
    },

    set( value ){
      defineProperty( this, key, {
        configurable: true,
        writable: true,
        enumerable: true,
        value: value
      });

      return value;
    }
  };
}

module.exports = {
  AutoBind,
}