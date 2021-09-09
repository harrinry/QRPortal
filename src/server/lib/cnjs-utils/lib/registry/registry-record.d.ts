import { Hooks, RegistryHook, RegistryHookOptions } from "./registry-hooks";

export interface RegistryRecordOptions<T>{
  name: string
  value: T
}

export class RegistryRecord<T>{

  private __NAME__: string
  private __VALUE__: T
  private __HOOKS__!: Record<Hooks, RegistryHook>

  constructor( options: RegistryRecordOptions<T> )

  private initHooks(): void
  private hasHooks(): boolean
  private registerHook( event: Hooks, options: RegistryHookOptions ): void
  private executeHook( event: Hooks, ...args: any[] ): any

  public on( event: "read"|"override", action: CallableFunction ): void
  public once( event: "read"|"override", action: CallableFunction ): void

  public read(): T
  public override( value: any ): void
}