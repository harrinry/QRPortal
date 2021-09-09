import { Hooks, RegistryHook, RegistryHookOptions } from "./registry-hooks";
import { RegistryRecord } from "./registry-record";

export interface RegistryHookAction extends Function{
  ( key: string, value: any ): any;
}

export class Registry{

  public __NAME__: string
  private __REGISTRY__: Record<string, RegistryRecord>
  private __HOOKS__: Record<string, any>

  constructor( name: string )

  private registerHook( event: Hooks, options: RegistryHookOptions ): void
  private executeHook( event: Hooks, ...args: any[] ): any

  public on( event: "register" | "remove", action: RegistryHookAction ): void
  public once( event: "register" | "remove", action: RegistryHookAction ): void

  public isRegistered( key: string ): boolean
  public newRecord<T>( key: string, value: T ): RegistryRecord<T> | boolean
  public getRecord( key: string ): RegistryRecord<any>
  public removeRecord( name: string ): boolean
}