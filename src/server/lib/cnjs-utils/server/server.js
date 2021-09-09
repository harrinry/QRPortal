const express = require("express");
const http = require("http");
const https = require("https");
// const cluster = require("cluster");
const { StaticController } = require("./static-controller");
const { Controller } = require("./controller");

/**
 * @abstract
 */
class Server{

  /**
   * @typedef {import("./server").ServerOptions} ServerOptions
   */

  /** 
   * @param {ServerOptions} options
   * @param {Controller[]|StaticController[]} controllers 
   * */
  constructor(options = {}, ...controllers){
    this.app = options.app || express();
    this.port = options.port;
    this.name = options.name;
    this.contextPath = options.contextPath;
    this.log = options.logger || console;
    this.https = options.https || false;
    this.bootMessage = typeof options.bootMessage === "function" ? options.bootMessage : (name, port) => options.bootMessage ? options.bootMessage : `${name} listening on port: ${port}`;
    this.middleware = options.middleware || [];
    this.dependencies = options.dependencies || [];
    this.dryInit = options.dryInit;
    this.__ready__ = false;
    this.__onready__ = null;

    this.controllers = controllers || [];
  }

  async $initChildControllers(){
    for (const controller of this.controllers) {
      try{
        const childController = (controller instanceof Controller || controller instanceof StaticController) 
          ? controller 
          : new controller(...this.dependencies);
          
        await childController.$init( this.app, this.contextPath );
      } catch( error ){
        this.log.error(`Controller Initialization Error on ${controller.constructor.name}`);
        this.log.error( error );
      }
    }
  }

  $initMW(){
    for (const middleware of this.middleware) {
      this.app.use(middleware);
    }
  }

  async $init(){
    await this.$preprocess();
    this.$initMW();
    await this.$initChildControllers();
    this.$initServer();
    await this.$postprocess();
    this.__ready__ = true;
    if(this.__onready__) this.__onready__();
  }

  /**
   * @abstract
   */
  async $preprocess(){}

  /**
   * @abstract
   */
  async $postprocess(){}

  $initServer(){
    if(this.dryInit) {
      this.log.info(`${this.name} -- DRY BOOT`);
      return;
    }

    let server;

    if( this.https ){
      server = https.createServer({
        key: this.https.key,
        cert: this.https.cert,
      }, this.app);
    } else {
      server = http.createServer(this.app);
    }

    server.listen(Number(this.port), () => {
      this.log.info(this.bootMessage(this.name, this.port));
    });
  }

  $onReady(callback){
    this.__onready__ = callback;
    if (this.__ready__) callback();
  }
}

module.exports = {
  Server
};