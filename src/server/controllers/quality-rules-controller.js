const { Controller } = require("../lib/cnjs-utils/server");
const { jwtAuth } = require("../services/extend-authentication-service");

/**
 * @typedef {import("winston").Logger} Logger
 * @typedef {import("../services/quality-rule-reader/service")} DataReader
 * @typedef {import("../services/http-error-service/service")} HttpErrorFactory
 * @typedef {import("../services/quality-rule-reader/search-service")} QualityRuleSearchIndex
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @typedef {import("express").NextFunction} NextFunction
 */

class QualityRulesController extends Controller {

  /**
   * @param {Logger} logger 
   * @param {DataReader} dataReader 
   * @param {QualityRuleSearchIndex} publicSearchIndex
   * @param {QualityRuleSearchIndex} privateSearchIndex
   */
  constructor(logger, dataReader, publicSearchIndex, privateSearchIndex){
    super({ logger, baseUrl: "/quality-rules" });

    this.dataReader = dataReader;
    this.publicSearchIndex = publicSearchIndex;
    this.privateSearchIndex = privateSearchIndex;
  }

  async $preprocess(){
    this.log.info(`Initiating ${this.publicSearchIndex.constructor.name}`);
    await this.publicSearchIndex.generate();
    this.log.info(`Initiating ${this.privateSearchIndex.constructor.name}`);
    await this.privateSearchIndex.generate();
    this
      .get("/:id", 
        jwtAuth(),
        this.handleAuthorizationRedirect(
          this.getQualityRule(this.dataReader),
          this.getPublicQualityRule(this.dataReader)
        )
      )
      .get("/", this.handleAuthorizationRedirect(
        this.searchQualityRules(this.dataReader, this.privateSearchIndex),
        this.searchQualityRules(this.dataReader, this.publicSearchIndex)
      ));
  }

  $postprocess(){
    this.log.info(`${this.constructor.name} Initialized`);
  }

  handleAuthorizationRedirect(onSuccess, onFail){
    return (req, res, next) => {
      if(req.user) {
        onSuccess(req, res, next);
      }
      else onFail(req, res, next)
    };
  }

  /**
   * @param {DataReader} dataReader 
   * @param {QualityRuleSearchIndex} searchIndex 
   */
  searchQualityRules(dataReader, searchIndex){

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    async function handler(req, res, next){
      const { q, "search-by": searchBy } = req.query;
      let _searchBy;

      try {

        if(searchBy){
          switch (searchBy.toLowerCase()) {
            case "id":
              _searchBy = "id";
              break
            case "name":
              _searchBy = "name";
              break;
            case "rationale":
              _searchBy = "rationale";
              break;
            case "technologies":
              _searchBy = "technologies";
              break;
            case "technical-criteria":
              _searchBy = "technicalCriteria";
              break;
            case "business-criteria":
              _searchBy = "businessCriteria";
              break;
            case "quality-standards":
              _searchBy = "qualityStandards";
              break;
            default:
              _searchBy = undefined;
              break;
          }
        }

        const results = searchIndex.query(q, _searchBy);
        const qualityRules = await dataReader.listQualityRuleReferences(results);

        res.status(200).json({name: "quality rules search", qualityRules});
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
      const { id } = req.params;

      try {
        const qualityRule = await dataReader.read(id);

        res.status(200).json(qualityRule);
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
  getPublicQualityRule(dataReader){

    /**
     * @param {Request} req 
     * @param {Response} res 
     */
    async function handler(req, res, next){
      const { id } = req.params;

      try {
        const qualityRule = await dataReader.read(id);

        res.status(200).json({
          id: qualityRule.id,
          name: qualityRule.name,
          rationale: qualityRule.rationale,
          businessCriteria: qualityRule.businessCriteria,
          technicalCriteria: qualityRule.technicalCriteria,
          technologies: qualityRule.technologies,
          qualityStandards: qualityRule.qualityStandards,
        });
      } catch (error) {
        next(error);
      }
    }

    return handler
  }
}

module.exports = QualityRulesController;