const BaseQualityStandard = require("./base-quality-standard");

class QualityStandardItemReference extends BaseQualityStandard {
  constructor(params = {}){
    super(params);

    this.id = params.id;
    this.count = params.count;
    this.url = params.url;
    this.isoPatterns = params.isoPatterns || [];
    this.qualityRules = params.qualityRules || [];
  }
}

module.exports = QualityStandardItemReference;