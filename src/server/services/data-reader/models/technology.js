const Base = require("./base");
const QualityRule = require("./quality-rule");

class Technology extends Base {
  constructor(data = {}){
    super(data);

    this.qualityRules = {};
    this.iconUrl = data.iconUrl;
  }

  setQualityRules(rules = []){
    for (const rule of rules) {
      if(!this.qualityRules[rule.id]){
        this.qualityRules[rule.id] = new QualityRule(rule);
      }
    }
  }

  toApiOutput(){
    return {
      ...super.toApiOutput(),
      iconUrl: this.iconUrl,
      qualityRules: Object.values(this.qualityRules).map(_ => _.toPublicOutput()),
    }
  }
}

module.exports = Technology;