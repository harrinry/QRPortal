class TechnicalCriteriaReference {
  constructor(data = {}){
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.href = data.href;
    this.weight = data.weight;
  }
}

module.exports = TechnicalCriteriaReference;