class BaseExtension {
  constructor(params = {}){
    this.qualityModel = params.qualityModel;
    this.transactionsConfiguration = params.transactionsConfiguration;
    this.name = params.name;
    this.title = params.title;
    this.href = params.href;

    this.description = params.description;

    this.iconUrl = params.iconUrl;
  }
}

module.exports = BaseExtension;