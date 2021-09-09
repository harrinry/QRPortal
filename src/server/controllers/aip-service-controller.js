const BaseServiceController = require("./base-service-controller");

class AIPServiceController extends BaseServiceController {

  constructor(logger, dataReader, technologyController/*, businessCriteriaController, qualityStandardController, versionController, extensionController, rulesHistoryController*/){
    super("/aip", logger, dataReader, [ technologyController/*businessCriteriaController, qualityStandardController, 
      versionController, extensionController, rulesHistoryController*/ ]);
  }
}

module.exports = AIPServiceController;