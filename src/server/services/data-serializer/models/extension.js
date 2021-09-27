const BaseExtension = require("./base-extension");

class Extension extends BaseExtension {
  constructor(params = {}){
    super(params);

    this.items = [];
  }
}

module.exports = Extension;