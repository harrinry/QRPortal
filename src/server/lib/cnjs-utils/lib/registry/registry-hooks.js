const Hooks = {
  register: Symbol("register"),
  read: Symbol("read"),
  override: Symbol("override"),
  remove: Symbol("remove"),
  all: Symbol("all"),
}

const HookTypes = {
  once: Symbol("once"),
  on: Symbol("on"),
  never: Symbol("never"),
}

class RegistryHook{
  constructor( options = { type: HookTypes.never, on: Hooks.all }){
    this.runCount = 0;
    this.on = options.on;
    this.type = options.type;
    this.action = options.action;
  }

  execute( ...params ){
    const res = this.action( ...params );
    this.runCount++;

    return res;
  }

  shouldExecute( event ){
    if( event !== this.on && this.on !== Hooks.all) return false;
    if( this.type === HookTypes.never ) return false;
    if( this.type === HookTypes.once && this.runCount === 1 ) return false;
    return true;
  }
}

module.exports = {
  Hooks,
  HookTypes,
  RegistryHook,
}