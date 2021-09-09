import { Application, Router, RouterOptions, RequestHandler, Response, Request } from "express";
import { Logger } from "winston";

interface InjectionHandler{
  (request: Request, response: Response, next: Function): (request: Request, response: Response, next: Function, ...params: any[]) => void
}

export interface ControllerOptions extends RouterOptions{
  baseUrl: string
  autoBind: boolean
  middleware: RequestHandler[]
  dependencies: any[]
  logger: Logger | Console
}

export abstract class Controller{
  constructor( options: ControllerOptions, ...controllers: Controller[] )
  constructor( baseUrl: string, ...controllers: Controller[] )
  
  router: Router
  baseUrl: string
  childControllers: Controller[]
  middleware: RequestHandler[]
  dependencies: any[]
  log: Logger | Console

  private $initChildControllers(): Promise<void>
  private $initRoutes(): void
  private $init(app: Application|Router, contextPath: string): Promise<void>
  private $initMW(): void
  abstract $preprocess(): Promise<void>
  abstract $postprocess(): Promise<void>
  private $autoBind( method: Function ): void
  private $autoBindInherited(): void
  public $inject(method: Function, ...params: any[]): InjectionHandler
  get(path: string|RegExp, ...handlers: Function[]): Router
  put(path: string|RegExp, ...handlers: Function[]): Router
  post(path: string|RegExp, ...handlers: Function[]): Router
  patch(path: string|RegExp, ...handlers: Function[]): Router
  delete(path: string|RegExp, ...handlers: Function[]): Router
  options(path: string|RegExp, ...handlers: Function[]): Router
  use(path: string|RegExp, ...handlers: Function[]): Router
}