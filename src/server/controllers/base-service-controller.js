const { Controller } = require("../lib/cnjs-utils/server");

/**
 * @typedef {import("../services/data-reader/service")} DataReader
 */

class BaseServiceController extends Controller {

  /**
   * 
   * @param {string} baseUrl 
   * @param {import("winston").Logger} logger 
   * @param {DataReader} dataReader 
   * @param {Controller[]} controllers 
   */
  constructor(baseUrl, logger, dataReader, controllers = []){
    super({
      logger,
      baseUrl,
    }, ...controllers);

    this.dataReader = dataReader;
  }

  $preprocess(){
    this.get("/", this.getServiceIndex(this.dataReader));
  }

  $postprocess(){
    this.log.info(`${this.constructor.name} Initialized`);
  }

  /**
   * @param {DataReader} dataReader 
   */
  getServiceIndex(dataReader){

    async function handler(_req, res, next){
      try {
        const serviceIndex = await dataReader.readServiceIndex();
        res.json(serviceIndex.items);
      } catch (error) {
        console.log(error.stack);
        next(error);
      }
    }

    return handler;
  }
}

module.exports = BaseServiceController;