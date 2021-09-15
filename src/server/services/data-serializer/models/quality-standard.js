const BaseQualityStandard = require("./base-quality-standard");

class QualityStandard extends BaseQualityStandard {
  constructor(params = {}, categories = []){
    super(params);

    this.categories = categories;
  }
}

module.exports = QualityStandard;