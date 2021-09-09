const URLBuilder = require("../../lib/cnjs-utils/services/web-client/url-builder");

class IconURLBuilder {
  constructor(baseUrl, fileExtension){
    this.builder = () => new URLBuilder(baseUrl);
    this.fileExtension = fileExtension;
  }

  createIconUrl(id){
    return this
      .builder()
      .append(`${id}.${this.fileExtension}`)
      .build()
      .toString();
  }
}

module.exports = IconURLBuilder;