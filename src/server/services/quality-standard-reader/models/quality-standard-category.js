const BaseQualityStandard = require("./base-quality-standard");

class QualityStandardCategory extends BaseQualityStandard {
  constructor(data = {}, items = []){
    super(data);

    this.items = items;
  }
}

module.exports = QualityStandardCategory;