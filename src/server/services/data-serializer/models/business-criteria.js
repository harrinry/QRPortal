const BaseBusinessCriteria = require("./base-business-criteria");

class BusinessCriteria extends BaseBusinessCriteria {
  constructor(data = {}){
    super(data);

    this.qualityRules = [];
    this.technicalCriteria = [];
  }
}

module.exports = BusinessCriteria;