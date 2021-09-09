const { StaticController, middleware: { handlerFactory } } = require("../lib/cnjs-utils/server");

class SwaggerUIController extends StaticController{

  /**
   * @param {import("winston").Logger} logger
   * @param {string} dir
   */
  constructor(logger, dir){
    super("/swagger-ui", {
      dir,
      catchFallthrough: (_req, res) => res.sendStatus(404),
    });
    
    this.logger = logger;
  }

  $postprocess(){
    this.logger.info(`${this.constructor.name} Initialized`);
  }

  // /**
  //  * @param {string} indexFile
  //  * @param {string} dir
  //  * @param {RegExp} match 
  //  * @param {any} headers
  //  * @param {Function} _errorHandler
  //  */
  // $spaCatchAll(indexFile, dir, match, headers, spaOptions, _errorHandler){
  //   return function (req, res, next){

  //     if (req.xhr) return next();
  //     else if (match instanceof RegExp && !match.test(req.url)) return next();
  
  //     return res.sendFile(indexFile, { 
  //       root: dir,
  //       ...spaOptions,
  //       headers,
  //     }, handlerFactory(_errorHandler, res, next));
  //   };
  // }
}

module.exports = SwaggerUIController;