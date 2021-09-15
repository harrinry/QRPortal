const BaseQualityStandard = require("./base-quality-standard");

class QualityStandardItem extends BaseQualityStandard {
  constructor(params = {}){
    super(params);

    this.id = params.id;
    this.count = params.count;
  }
}

module.exports = QualityStandardItem;