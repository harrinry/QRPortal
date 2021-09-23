const BaseServiceController = require("./base-service-controller");

class CARLServiceController extends BaseServiceController {

  constructor(logger, dataReader, technologyController, qualityStandardController, businessCriteriaController, indexController){
    super("/carl", logger, dataReader, [ technologyController, qualityStandardController, businessCriteriaController, indexController ]);
  }
}

module.exports = CARLServiceController;