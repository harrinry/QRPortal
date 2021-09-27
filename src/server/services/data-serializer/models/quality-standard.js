const BaseQualityStandard = require("./base-quality-standard");

class QualityStandard extends BaseQualityStandard {
  constructor(params = {}, categories = []){
    super(params);

    this.items = categories;
  }
}

module.exports = QualityStandard;