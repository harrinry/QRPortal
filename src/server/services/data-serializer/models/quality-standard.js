const BaseQualityStandard = require("./base-quality-standard");

class QualityStandard extends BaseQualityStandard {
  constructor(params = {}, categories = []){
    super(params);

    /**
     * @type {import("./quality-standard-category")[]}
     */
    this.items = categories;
  }
}

module.exports = QualityStandard;