class BaseQualityStandard {
  constructor(data = {}){
    this.name = data.name;
    this.href = data.href;
    this.description = data.description;

    this.iconUrl = data.iconUrl;
  }
}

module.exports = BaseQualityStandard;