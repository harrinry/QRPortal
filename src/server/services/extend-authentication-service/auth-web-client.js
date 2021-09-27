const { WebClient } = require("../extend");

class ExtendAuthWebClient extends WebClient {
  constructor(extendBaseUrl) {
    super(extendBaseUrl);
  }

  URLBuilderFactory(){
    return super.URLBuilderFactory()
      .append("api")
      .append("user");
  }

  async signin(username, password){
    const urlBuilder = this.URLBuilderFactory().append("signin");

    try {
      const response = await this.post(urlBuilder.toString(),
        JSON.stringify({ uid: username, pwd: password }),
        { "Content-Type": "application/json" });

      return response.json();
    } catch (error) {
      return null;
    }
  }
}

module.exports = ExtendAuthWebClient;