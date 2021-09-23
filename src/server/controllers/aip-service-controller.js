const BaseServiceController = require("./base-service-controller");

class AIPServiceController extends BaseServiceController {

  constructor(logger, dataReader, technologyController, qualityStandardController, extensionController, businessCriteriaController, indexController, technicalCriteriaController){
    super("/aip", logger, dataReader, [ technologyController, qualityStandardController, extensionController, businessCriteriaController, indexController, technicalCriteriaController ]);
  }
}

module.exports = AIPServiceController;