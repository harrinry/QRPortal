const { Controller } = require("../lib/cnjs-utils/server");

/**
 * @typedef {import("winston").Logger} Logger
 * @typedef {import("../services/business-criteria-reader/reader")} DataReader
 * @typedef {import("../services/http-error-service/service")} HttpErrorFactory
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @typedef {import("express").NextFunction} NextFunction
 */

class IndexController extends Controller {

  /**
   * @param {Logger} logger 
   * @param {DataReader} dataReader 
   */
  constructor(logger, dataReader){
    super({ logger, baseUrl: "/indexes" });

    this.dataReader = dataReader;
  }

  async $preprocess(){
    this.get("/", this.listAll(this.dataReader));
  }

  $postprocess(){
    this.log.info(`${this.constructor.name} Initialized`);
  }

  /**
   * @param {DataReader} dataReader 
   */
   listAll(dataReader){

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    async function handler(_req, res, next){
      try {
        let list = await dataReader.list();
        
        res.status(200).json(list.filter(_ => _.id > 1000000));
      } catch (error) {
        next(error);
      }
    }

    return handler
  }
}

module.exports = IndexController;