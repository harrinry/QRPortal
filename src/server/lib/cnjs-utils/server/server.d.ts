import { Application, RequestHandler } from "express";
import { Logger } from "winston";
import { Controller } from "./controller";

export interface HttpsOptions{
  key: string
  cert: string
}

export interface BootMessageFactory{
  ( name: string, port: number ): string;
}

export interface ServerOptions{
  app?: Application
  contextPath: string
  port: number
  name: string
  logger: Logger | Console
  https: HttpsOptions
  bootMessage: string|BootMessageFactory
  middleware: RequestHandler[]
  dependencies: any[]
  dryInit: boolean
}

export abstract class Server{
  constructor(options: ServerOptions, ...controllers: Controller[])
  app?: Application
  port: number
  contextPath: string
  name: string
  https: HttpsOptions
  dependencies: any[]
  middleware: RequestHandler[]
  log: Logger | Console
  bootMessage: BootMessageFactory
  controllers: Controller[]
  
  private $initServer(): void
  private $init(): Promise<void>
  private $initMW(): void
  private $initChildControllers(): Promise<void>
  abstract $preprocess(): Promise<void>
  abstract $postprocess(): Promise<void>
  public $onReady(callback: Function): void
}