
class QualityRuleReference {
  constructor(data = {}){
    this.id = data.id;
    this.name = data.name;
    this.href = `quality-rules/${this.id}`;
    this.critical = data.critical;
    this.severity = data.severity;
    this.technologies = data.technologyNames || (data.technologies ? data.technologies.map(_ => _.name) : undefined);
    this.status = data.status;
  }
}

module.exports = QualityRuleReference;