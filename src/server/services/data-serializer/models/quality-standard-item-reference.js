const BaseQualityStandard = require("./base-quality-standard");

class QualityStandardItemReference extends BaseQualityStandard {
  constructor(params = {}){
    super(params);

    this.id = params.id;
    this.displayName = `${this.id} - ${this.name}`;
    this.count = params.count;
    this.url = params.url;
    this.isoPatterns = params.isoPatterns || [];
    this.qualityRules = params.qualityRules || [];
    this.qualityTemplates = params.qualityTemplates || [];
  }
}

module.exports = QualityStandardItemReference;