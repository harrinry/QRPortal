const { Controller } = require("../lib/cnjs-utils/server");

/**
 * @typedef {import("winston").Logger} Logger
 * @typedef {import("../services/quality-standard-reader/service")} QualityStandardDataReader
 * @typedef {import("../services/http-error-service/service")} HttpErrorFactory
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @typedef {import("express").NextFunction} NextFunction
 */

class QualityStandardController extends Controller {

  /**
   * @param {Logger} logger 
   * @param {QualityStandardDataReader} dataReader 
   */
  constructor(logger, dataReader){
    super({ logger, baseUrl: "/quality-standards" });

    this.dataReader = dataReader;
  }

  $preprocess(){
    this
      .get("/", this.listQualityStandards(this.dataReader))
      .get("/:id", this.getQualityStandard(this.dataReader))
      .get("/:id/categories/:categoryId", this.getQualityStandardCategory(this.dataReader))
      .get("/:id/categories/:categoryId/section/:section", this.getQualityStandardCategorySection(this.dataReader))
      .get("/:id/sections/:section", this.getQualityStandardSection(this.dataReader))
  }

  $postprocess(){
    this.log.info(`${this.constructor.name} Initialized`);
  }

  /**
   * @param {QualityStandardDataReader} dataReader
   */
  listQualityStandards(dataReader){

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    async function handler(_req, res, next){
      try {
        const qualityStandards = await dataReader.list();

        res.status(200).json(qualityStandards);
      } catch (error) {
        next(error);
      }
    }

    return handler
  }

  /**
   * @param {QualityStandardDataReader} dataReader 
   */
  getQualityStandard(dataReader){

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

  /**
   * @param {QualityStandardDataReader} dataReader 
   */
  getQualityStandardCategory(dataReader){

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
     async function handler(req, res, next){
      const {id, categoryId} = req.params;

      try {
        const model = await dataReader.readQualityStandardCategory(id, categoryId);

        res.status(200).json(model);
      } catch (error) {
        next(error);
      }
    }

    return handler
  }

  /**
   * @param {QualityStandardDataReader} dataReader 
   */
  getQualityStandardCategorySection(dataReader){

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
     async function handler(req, res, next){
      const {id, categoryId, section} = req.params;

      try {
        const model = await dataReader.readQualityStandardCategory(id, categoryId);

        res.status(200).json(model);
      } catch (error) {
        next(error);
      }
    }

    return handler
  }

    /**
   * @param {QualityStandardDataReader} dataReader 
   */
  getQualityStandardSection(dataReader){

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
     async function handler(req, res, next){
      const {id, section} = req.params;

      try {
        const model = await dataReader.readQualityStandardItems(id, section);

        res.status(200).json(model);
      } catch (error) {
        next(error);
      }
    }

    return handler
  }
}

module.exports = QualityStandardController;