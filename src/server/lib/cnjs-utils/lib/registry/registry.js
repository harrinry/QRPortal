const { HookTypes, Hooks, RegistryHook } = require("./registry-hooks");
const { RegistryRecord } = require("./registry-record");

class Registry{
  
  constructor( name ){
    this.__NAME__ = name;
    this.__REGISTRY__ = {};
    this.__HOOKS__ = {
      [Hooks.register]: new RegistryHook(),
      [Hooks.remove]: new RegistryHook(),
    };
  }

  newRecord( key, value ){
    if(this.isRegistered(key)){
      return false;
    }
    const hook_res = this.executeHook( Hooks.register, key, value );
    this.__REGISTRY__[key] = new RegistryRecord({ name: key, value: hook_res === HookTypes.never ? value : hook_res });
    return this.getRecord(key);
  }

  isRegistered( key ){
    return !!this.__REGISTRY__[key];
  }

  getRecord( key ){
    return this.__REGISTRY__[key];
  }

  removeRecord( key ){
    if(!this.isRegistered(key)){
      return false
    }
    const hook_res = this.executeHook( Hooks.remove, key, this.getRecord( key ).read() );
    if( hook_res === HookTypes.never || hook_res === true ){
      this.__REGISTRY__[key] = null;
      delete this.__REGISTRY__[key];
    }

    return true;
  }

  registerHook( event, options ){
    const hookType = Hooks[event];
    options.on = hookType;

    if( hookType ){
      this.__HOOKS__[hookType] = new RegistryHook( options );
    }
  }

  on( event, action ){
    return this.registerHook( event, {
      type: HookTypes.on,
      action: action
    });
  }

  once( event, action ){
    return this.registerHook( event, {
      type: HookTypes.once,
      action: action
    });
  }

  executeHook( event, ...args ){
    const hook = this.__HOOKS__[event];
    
    if(hook.shouldExecute( event )){
      return hook.execute( ...args );
    }

    return HookTypes.never;
  }
}

module.exports = {
  Registry,
};