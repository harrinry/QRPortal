const { Controller } = require("../lib/cnjs-utils/server");

/**
 * @typedef {import("winston").Logger} Logger
 * @typedef {import("../services/technology-reader/service")} TechnologyDataReader
 * @typedef {import("../services/http-error-service/service")} HttpErrorFactory
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @typedef {import("express").NextFunction} NextFunction
 */

class TechnologyController extends Controller {

  /**
   * @param {Logger} logger 
   * @param {TechnologyDataReader} dataReader 
   */
  constructor(logger, dataReader){
    super({ logger, baseUrl: "/technologies" });

    this.dataReader = dataReader;
  }

  $preprocess(){
    this
      .get("/", this.listTechnologies(this.dataReader))
      .get("/:id", this.getTechnology(this.dataReader))
  }

  $postprocess(){
    this.log.info(`${this.constructor.name} Initialized`);
  }

  /**
   * @param {TechnologyDataReader} dataReader 
   */
  listTechnologies(dataReader){

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    async function handler(_req, res, next){
      try {
        const list = await dataReader.readConsolidatedTechnologies();

        res.status(200).json({name: "technologies", items: list});
      } catch (error) {
        next(error);
      }
    }

    return handler
  }

    /**
   * @param {TechnologyDataReader} dataReader 
   */
  getTechnology(dataReader){

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async function handler(req, res, next){
      const {id} = req.params;

      try {
        const technology = await dataReader.readTechnology(id);

        if(!technology) return res.sendStatus(404)
        res.status(200).json(technology.toApiOutput());
      } catch (error) {
        next(error);
      }
    }

    return handler
  }
}

module.exports = TechnologyController;