const { Controller } = require("../lib/cnjs-utils/server");

/**
 * @typedef {import("winston").Logger} Logger
 * @typedef {import("../services/url-converter/url-converter")} URLConverter
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @typedef {import("express").NextFunction} NextFunction
 */

class RulesController extends Controller {

  /**
   * @param {Logger} logger 
   * @param {URLConverter} urlConverter 
   */
  constructor(logger, urlConverter){
    super({ logger, baseUrl: "/rules" });

    this.urlConverter = urlConverter;
  }

  async $preprocess(){
    this.get("/", this.redirect(this.urlConverter));
  }

  $postprocess(){
    this.log.info(`${this.constructor.name} Initialized`);
  }

  /**
   * @param {URLConverter} urlConverter 
   */
   redirect(urlConverter){

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    async function handler(req, res, next){
      try {
        const url = await urlConverter.parse(req.query);

        res.redirect(url.toString());
      } catch (error) {
        next(error);
      }
    }

    return handler
  }
}

module.exports = RulesController;