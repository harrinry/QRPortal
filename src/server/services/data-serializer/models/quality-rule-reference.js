
class QualityRuleReference {
  constructor(data = {}){
    this.id = data.id;
    this.name = data.name;
    this.href = `api/quality-rules/${this.id}`;
    this.critical = data.critical;
    this.severity = data.severity;
    this.technologies = data.technologyNames;
  }
}

module.exports = QualityRuleReference;