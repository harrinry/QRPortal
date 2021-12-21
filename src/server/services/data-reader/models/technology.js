const Base = require("./base");
const QualityRule = require("../../data-serializer/models/quality-rule");

class Technology extends Base {
  constructor(data = {}){
    super(data);

    this.qualityRules = {};
    this.qualityTemplates = {};
    this.iconUrl = data.iconUrl;
  }

  setQualityRules(rules = []){
    for (const rule of rules) {
      if(!this.qualityRules[rule.id]){
        this.qualityRules[rule.id] = new QualityRule(rule);
      }
    }
  }

  setQualityTemplates(templates = []){
    for (const template of templates) {
      if(!this.qualityTemplates[template.id]){
        this.qualityTemplates[template.id] = new QualityRule(template);
      }
    }
  }

  toApiOutput(){
    return {
      ...super.toApiOutput(),
      iconUrl: this.iconUrl,
      qualityRules: Object.values(this.qualityRules).map(_ => _.toPublicOutput()),
      qualityTemplates: Object.values(this.qualityTemplates).map(_ => _.toPublicOutput()),
    }
  }
}

module.exports = Technology;