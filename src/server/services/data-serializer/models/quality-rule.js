
class QualityRule {
  constructor(data = {}){
    this.id = data.id;
    this.name = data.name;
    this.critical = data.critical;
    this.severity = data.severity;
    this.maxWeight = data.maxWeight;
    this.associatedValueName = data.associatedValueName;
    this.description = data.description;
    this.output = data.output;
    this.rationale = data.rationale;
    this.reference = data.reference;
    this.remediation = data.remediation;
    this.remediationSample = data.remediationSample;
    this.sample = data.sample;
    this.total = data.total;
    this.alternativeName = data.alternativeName;

    this.businessCriteria = data.businessCriteria || [];
    this.technicalCriteria = data.technicalCriteria || [];
    this.technologies = data.technologies || [];
    this.qualityStandards = data.qualityStandards || [];
    this.parameters = data.parameters || [];
    this.thresholds = data.thresholds || [];
  }
}

module.exports = QualityRule;