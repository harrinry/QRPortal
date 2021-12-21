
class QualityRule {
  constructor(data = {}){
    this.id = data.id;
    this.name = data.name;
    this.href = `quality-rules/${this.id}`;
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
    this.status = data.status;

    this.businessCriteria = data.businessCriteria || [];
    this.technicalCriteria = data.technicalCriteria || [];
    this.technologies = data.technologies || data.technologyNames || [];
    this.qualityStandards = data.qualityStandards || [];
    this.parameters = data.parameters || [];
    this.thresholds = data.thresholds || [];
  }

  toPublicOutput(){
    return {
      id: this.id,
      name: this.name,
      critical: this.critical,
      severity: this.severity,
      rationale: this.rationale,
      technologies: this.technologies,
    }
  }
}

module.exports = QualityRule;