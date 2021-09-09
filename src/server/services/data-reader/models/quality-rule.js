
class QualityRule {
  constructor(data = {}){
    this.id = data.id;
    this.name = data.name;
    this.href = `api/quality-rules/${this.id}`;
    this.critical = data.critical;
    this.severity = data.severity;
    this.maxWeight = data.maxWeight;
    this.associatedValueName = data.associatedValueName;
    this.description = data.description;
    this.output = data.output;
    this.rationale = data.rationale;
    this.remediation = data.remediation;
    this.total = data.total;
    this.alternativeName = data.alternativeName;

    this.businessCriteria = data.businessCriteria || [];
    this.technicalCriteria = data.technicalCriteria || [];
    this.technologies = data.technologies || [];
    this.qualityStandards = data.qualityStandards || [];
    this.parameters = data.parameters || [];
    this.thresholds = data.thresholds || [];
  }

  toPublicOutput(){
    return {
      id: this.id,
      name: this.name,
      href: this.href,
      critical: this.critical,
      severity: this.severity,
      maxWeight: this.maxWeight,
      associatedValueName: this.associatedValueName,
      description: this.description,
      output: this.output,
    }
  }
}

module.exports = QualityRule;