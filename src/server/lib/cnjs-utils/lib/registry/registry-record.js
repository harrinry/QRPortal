const { RegistryHook, HookTypes, Hooks } = require("./registry-hooks");

class RegistryRecord{
  constructor( options ){
    this.__NAME__ = options.name;
    this.__VALUE__ = options.value;
    this.__HOOKS__ = null;
  }

  initHooks(){
    this.__HOOKS__ = {
      [Hooks.read]: new RegistryHook(),
      [Hooks.override]: new RegistryHook(),
    };
  }

  hasHooks(){
    return !!this.__HOOKS__;
  }

  registerHook( event, options ){
    const hookType = Hooks[event];
    options.on = hookType;
    if(!this.hasHooks()) this.initHooks();

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
    if( !this.hasHooks() ) return HookTypes.never;

    const hook = this.__HOOKS__[event];
    
    if(hook.shouldExecute( event )){
      return hook.execute( ...args );
    }

    return HookTypes.never;
  }

  override( value ){
    const hook_res = this.executeHook( Hooks.override, this.__NAME__, this.__VALUE__, value );
    this.__VALUE__ = hook_res === HookTypes.never ? value : hook_res;
    return this.read();
  }

  read(){
    const hook_res = this.executeHook( Hooks.read, this.__NAME__, this.__VALUE__ );
    return hook_res === HookTypes.never ? this.__VALUE__ : hook_res;
  }
}

module.exports = { RegistryRecord };