const express = require("express");
const { enoentHandler, handlerFactory } = require("./middleware");

class StaticController{

  constructor(baseUrl, options, staticOptions ){

    this.baseUrl = baseUrl;
    this.staticDir = options.dir;
    this.router = express.static( options.dir, staticOptions );
    this.spaHeaders = options.spaHeaders || {};
    this.spaOptions = options.spaSendFileOptions || {};
    this.isSpa = options.spa || false;
    this.spaIndex = options.indexFile || "index.html";
    this.spaIgnoreRoute = options.ignore || /(\/rest)|(\/api)/i;
    this.catchFallthrough = options.catchFallthrough;
    this.errorHandler = options.errorHandler || enoentHandler;
  }

  /**
   * @param {string} indexFile
   * @param {string} dir
   * @param {RegExp} ignore 
   * @param {any} headers
   * @param {Function} _errorHandler
   */
  $spaCatchAll( indexFile, dir, ignore, headers, spaOptions, _errorHandler ){
    return function ( req, res, next ){

      if( req.xhr || (ignore instanceof RegExp && ignore.test(req.url)) ) return next();
  
      return res.sendFile( indexFile, { 
        root: dir,
        ...spaOptions,
        headers,
      }, handlerFactory(_errorHandler, res, next) );
    };
  }

  /**
   * @abstract
   */
  async $preprocess(){}

  /**
   * @abstract
   */
  async $postprocess(){}


  /**
   * @param {Express.Application|Router} app
   * @param {string} contextPath
   */
  async $init(app, contextPath = ""){
    if(!app) return;
    await this.$preprocess();
    app.use(contextPath + this.baseUrl, this.router);
    
    if(this.isSpa){
      if(contextPath){
        app.use( contextPath,
          this.$spaCatchAll(
            this.spaIndex,
            this.staticDir,
            this.spaIgnoreRoute,
            this.spaHeaders,
            this.spaOptions,
            this.errorHandler
            )
          );
      } else {
        app.use( 
        this.$spaCatchAll(
          this.spaIndex,
          this.staticDir,
          this.spaIgnoreRoute,
          this.spaHeaders,
          this.spaOptions,
          this.errorHandler
          )
        );
      }
    } else if ( this.catchFallthrough ){
      app.use( `${contextPath}${this.baseUrl}/*`, this.catchFallthrough );
    }

    await this.$postprocess();
  }
}

module.exports = {
  StaticController
};