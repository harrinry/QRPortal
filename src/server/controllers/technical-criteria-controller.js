const { Controller } = require("../lib/cnjs-utils/server");

/**
 * @typedef {import("winston").Logger} Logger
 * @typedef {import("../services/technical-criteria-reader/reader")} DataReader
 * @typedef {import("../services/http-error-service/service")} HttpErrorFactory
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @typedef {import("express").NextFunction} NextFunction
 */

class TechnicalCriteriaController extends Controller {

  /**
   * @param {Logger} logger 
   * @param {DataReader} dataReader 
   */
  constructor(logger, dataReader){
    super({ logger, baseUrl: "/technical-criteria" });

    this.dataReader = dataReader;
  }

  async $preprocess(){
    this.get("/:id", this.getInfo(this.dataReader));
  }

  $postprocess(){
    this.log.info(`${this.constructor.name} Initialized`);
  }

  /**
   * @param {DataReader} dataReader 
   */
  getInfo(dataReader){

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async function handler(req, res, next){
      const {id} = req.params;

      try {
        const model = await dataReader.read(id);

        res.status(200).json(model);
      } catch (error) {
        next(error);
      }
    }

    return handler
  }
}

module.exports = TechnicalCriteriaController;