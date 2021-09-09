const BaseModel = require("../../data-reader/models/base");

class QualityStandard extends BaseModel {
  constructor(params = {}, qualityRules = []){
    super(params);

    this.url = params.url;
    this.description = params.description;
    this.isoPatterns = params.isoPatterns;
    this.count = params.count;

    this.qualityRules = qualityRules;
  }
}

module.exports = QualityStandard;