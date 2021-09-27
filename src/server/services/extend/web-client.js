const { WebClient, URLBuilder } = require("../../lib/cnjs-utils/services/web-client");

class ExtendWebClient {
  constructor(extendBaseUrl){
    this.client = new WebClient();
    this.extendBaseUrl = extendBaseUrl;
  }

  URLBuilderFactory(){
    return new URLBuilder(this.extendBaseUrl);
  }

  get(url, headers){
    return this.client.get(url, headers);
  }

  post(url, body, headers){
    return this.client.post(url, body, headers);
  }
}

module.exports = ExtendWebClient;