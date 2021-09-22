const BaseServiceController = require("./base-service-controller");

class AIPServiceController extends BaseServiceController {

  constructor(logger, dataReader, technologyController, qualityStandardController, extensionController/*, businessCriteriaController*/){
    super("/aip", logger, dataReader, [ technologyController, qualityStandardController, extensionController/*businessCriteriaController*/ ]);
  }
}

module.exports = AIPServiceController;