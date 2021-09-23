class BaseBusinessCriteria {
  constructor(data = {}){
    this.id = data.id;
    this.name = data.name;
    this.href = data.href;
    this.description = data.description;

    this.iconUrl = data.iconUrl;
  }
}

module.exports = BaseBusinessCriteria;