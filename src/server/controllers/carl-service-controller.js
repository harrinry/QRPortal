const BaseServiceController = require("./base-service-controller");

class CARLServiceController extends BaseServiceController {

  constructor(logger, dataReader, technologyController, qualityStandardController/*businessCriteriaController, qualityStandardController, versionController, extensionController, rulesHistoryController*/){
    super("/carl", logger, dataReader, [ technologyController, qualityStandardController/*businessCriteriaController, qualityStandardController, 
      versionController, extensionController, rulesHistoryController*/ ]);
  }
}

module.exports = CARLServiceController;