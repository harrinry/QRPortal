const { Controller } = require("../lib/cnjs-utils/server");

/**
 * @typedef {import("winston").Logger} Logger
 * @typedef {import("../services/data-reader/service")} DataReader
 * @typedef {import("../services/http-error-service/service")} HttpErrorFactory
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @typedef {import("express").NextFunction} NextFunction
 */

class QualityRulesController extends Controller {

  /**
   * @param {Logger} logger 
   * @param {DataReader} dataReader 
   * @param {HttpErrorFactory} httpErrorFactory
   */
  constructor(logger, dataReader, httpErrorFactory){
    super({ logger, baseUrl: "/quality-rules" });

    this.dataReader = dataReader;
    this.httpErrorFactory = httpErrorFactory;
  }

  $preprocess(){
    this
      .get("/:id", this.getQualityRule(this.dataReader));
      // .get("/", this.listQualityRules(this.dataReader))
  }

  $postprocess(){
    this.log.info(`${this.constructor.name} Initialized`);
  }

  handleAuthorizationRedirect(){
    return (req, res) => {
      if(req.user) res.redirect(`member/${req.params.id}`)
      else res.redirect(`public/${req.params.id}`);
    };
  }

  /**
   * @param {Logger} logger 
   * @param {DataReader} dataReader 
   */
  listQualityRules(dataReader){

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    async function handler(_req, res, next){
      try {
        const qualityRules = await dataReader.listQualityRules();

        res.status(200).json(qualityRules);
      } catch (error) {
        next(error);
      }
    }

    return handler
  }

    /**
   * @param {Logger} logger 
   * @param {DataReader} dataReader 
   */
  getQualityRule(dataReader){

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async function handler(req, res, next){
      const {id} = req.params;

      try {
        const qualityRule = await dataReader.readQualityRule(id);

        res.status(200).json(qualityRule);
      } catch (error) {
        next(error);
      }
    }

    return handler
  }
}

module.exports = QualityRulesController;