class BaseExtension {
  constructor(params = {}){
    qualityModel = params.qualityModel;
    transactionsConfiguration = params.transactionsConfiguration;
    name = params.name;
    href = params.href;
  }
}

module.exports = BaseExtension;