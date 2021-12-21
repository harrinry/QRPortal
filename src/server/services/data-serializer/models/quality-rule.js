
class QualityRule {
  constructor(data = {}){
    this.id = data.id;
    this.name = data.name;
    this.href = `quality-rules/${this.id}`;
    this.critical = data.critical;
    this.severity = data.severity;
    this.maxWeight = data.maxWeight;
    this.isTemplate = data.isTemplate || false;
    this.download = data.download || null;
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
    this.status = data.status;

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
      isTemplate: this.isTemplate,
      critical: this.critical,
      severity: this.severity,
      technologies: this.technologies,
      status: this.status,
      rationale: this.rationale,
    };
  }
}

module.exports = QualityRule;