export interface RegistryHookOptions{
  on: Hooks
  type: HookTypes
  action: CallableFunction
}

export enum Hooks{
  register = Symbol("register"),
  read = Symbol("read"),
  override = Symbol("override"),
  remove = Symbol("remove"),
  all = Symbol("all"),
}

export enum HookTypes{
  once = Symbol("once"),
  on = Symbol("on"),
  never = Symbol("never"),
}

export class RegistryHook{

  public runCount: number
  public on: Hooks
  public type: HookTypes
  public action: CallableFunction

  constructor( options: RegistryHookOptions )

  public execute( ...args: any[] ): any
  public shouldExecute( event: Hooks ): boolean
}