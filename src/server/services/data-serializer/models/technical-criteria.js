const BaseBusinessCriteria = require("./base-business-criteria");

class TechnicalCriteria extends BaseBusinessCriteria {
  constructor(data = {}){
    super(data);

    this.qualityRules = [];
    this.qualityTemplates = [];
  }
}

module.exports = TechnicalCriteria;