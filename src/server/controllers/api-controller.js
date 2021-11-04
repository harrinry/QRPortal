const { Controller } = require("../lib/cnjs-utils/server");

class ApiController extends Controller {

  constructor(...params){
    super({
      logger: params[0],
      baseUrl: "/api",
    }, ...params.slice(2));

    /**
     * @type {import("../services/data-reader/service")}
     */
    this.dataReader = params[1];
  }

  async $preprocess(){
    await this.dataReader.readServiceIndex();

    this.get("/", this.getServiceIndex(this.dataReader));
  }

  $postprocess(){
    this.log.info(`${this.constructor.name} Initialized`);
  }

  getServiceIndex(dataReader){

    async function handler(_req, res, next){
      try {
        const serviceIndex = await dataReader.readServiceIndex();
        res.json(serviceIndex);
      } catch (error) {
        console.log(error.stack);
        next(error);
      }
    }

    return handler;
  }
}

module.exports = ApiController;