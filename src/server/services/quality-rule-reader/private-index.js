const QualityRuleSearchIndex = require("./search-service");

const fields = ["id","name","critical","maxWeight","associatedValueName","description","output","rationale","remediation","sample","total","alternativeName","businessCriteria","technicalCriteria","technologies","qualityStandards"];

/**
 * @param {import("../data-serializer/models/quality-rule")} qualityRule 
 */
function factory(qualityRule){
  return {
    ref: qualityRule.id,
    id: qualityRule.id,
    name: qualityRule.name,
    description: qualityRule.description,
    remediation: qualityRule.remediation,
    sample: qualityRule.sample,
    rationale: qualityRule.rationale,
    businessCriteria: qualityRule.businessCriteria.map(_ => _.name),
    technicalCriteria: qualityRule.technicalCriteria.map(_ =>  _.id),
    technologies: qualityRule.technologies.map(_ => _.name),
    qualityStandards: qualityRule.qualityStandards.map(_ =>  `${_.id} ${_.standard}`)
  }
}

class PrivateQualityRuleSearchIndex extends QualityRuleSearchIndex {
  constructor(folderService, qualityRuleReader){
    super(folderService, qualityRuleReader, "private-quality-rule-search-index", fields, factory);
  }
}

module.exports = PrivateQualityRuleSearchIndex;