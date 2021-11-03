const BaseQualityStandard = require("./base-quality-standard");

class QualityStandardCategory extends BaseQualityStandard {
  constructor(data = {}, items = []){
    super(data);

    /**@type {import("./quality-standard-item")[]} */
    this.items = items;
  }
}

module.exports = QualityStandardCategory;