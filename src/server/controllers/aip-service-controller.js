const BaseServiceController = require("./base-service-controller");

class AIPServiceController extends BaseServiceController {

  constructor(logger, dataReader, technologyController, qualityStandardController/*, businessCriteriaController, , versionController, extensionController, rulesHistoryController*/){
    super("/aip", logger, dataReader, [ technologyController, qualityStandardController/*businessCriteriaController, qualityStandardController, 
      versionController, extensionController, rulesHistoryController*/ ]);
  }
}

module.exports = AIPServiceController;