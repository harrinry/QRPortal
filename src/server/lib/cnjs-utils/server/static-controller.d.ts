import express, { static, Router, Handler, ErrorRequestHandler } from "express";
import { ServeStaticOptions, serveStatic } from "serve-static";

export interface StaticControllerOptions {
  dir: string
  spaHeaders: Object
  spaSendFileOptions: Object
  catchFallthrough: Handler
  spa: boolean
  indexFile: string
  ignore: RegExp
  errorHandler(): ErrorRequestHandler
}


export abstract class StaticController{
  constructor(baseUrl: string, options: StaticControllerOptions, staticOptions: ServeStaticOptions)
  baseUrl: string
  staticDir: string
  router: typeof serveStatic
  spaHeaders: Object
  spaOptions: Object
  spaIndex: string
  spaIgnoreRoute: RegExp
  catchFallthrough: Handler
  errorHandler: ErrorRequestHandler
  private $spaCatchAll( indexFile: string, dir: string, ignore: RegExp, headers: Object, spaOptions: Object, _errorHandler?: ErrorRequestHandler ): Handler
  abstract $preprocess(): Promise<void>
  abstract $postprocess(): Promise<void>
  private $init( app: Express.Application | Router ): Promise<void>
}