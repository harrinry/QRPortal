const QualityRuleSearchIndex = require("./search-service");

const fields = ["id","name","rationale","businessCriteria","technicalCriteria","technologies","qualityStandards"];

/**
 * @param {import("../data-serializer/models/quality-rule")} qualityRule 
 */
function factory(qualityRule){
  return {
    ref: qualityRule.id,
    id: qualityRule.id, 
    name: qualityRule.name, 
    rationale: qualityRule.rationale,
    businessCriteria: qualityRule.businessCriteria.map(_ => `${_.id} ${_.name}`),
    technicalCriteria: qualityRule.technicalCriteria.map(_ =>  `${_.id} ${_.name}`),
    technologies: qualityRule.technologies.map(_ =>  `${_.id} ${_.name}`),
    qualityStandards: qualityRule.qualityStandards.map(_ =>  `${_.id} ${_.name} ${_.standard}`)
  }
}

class PublicQualityRuleSearchIndex extends QualityRuleSearchIndex {
  constructor(folderService, qualityRuleReader){
    super(folderService, qualityRuleReader, "public-quality-rule-search-index", fields, factory);
  }
}

module.exports = PublicQualityRuleSearchIndex;