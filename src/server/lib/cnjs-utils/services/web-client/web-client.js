const nodeFetch = require("node-fetch").default;
const WebClientError = require("./web-client-error");

class WebClient {
  
  constructor(config = {}){
    this.client = nodeFetch;
    this.headers = config.headers || {};
    /**
     * @type {import("http").Agent}
     */
    this.agent = config.agent;
  }

  /**
   * @param {import("node-fetch").Response} res
   */
  async checkStatus(res){
    if (res.ok){
      return res;
    } else {
      let json;

      try {
        json = await res.json();
      } catch (error) {
        json = null;
      }

      throw new WebClientError(res.statusText, res.status, json);
    }
  }

  async _fetch(url, method, headers, body){
    const res = await this.client(url, {
      method: method,
      headers: {
        ...this.headers,
        ...headers,
      },
      body,
      agent: this.agent,
    });

    await this.checkStatus(res);

    return res;
  }

  /**
   * 
   * @param {string} url 
   * @param {Object} headers 
   */
  get(url, headers){
    return this._fetch(url, "GET", headers);
  }

  /**
   * 
   * @param {string} url 
   * @param {Object} headers 
   */
  delete(url, headers){
    return this._fetch(url, "DELETE", headers);
  }

  /**
   * 
   * @param {string} url 
   * @param {Object} body
   * @param {Object} headers 
   */
  put(url, body, headers){
    return this._fetch(url, "PUT", headers, body);
  }

  /**
   * 
   * @param {string} url 
   * @param {Object} body
   * @param {Object} headers 
   */
  post(url, body, headers){
    return this._fetch(url, "POST", headers, body);
  }

  /**
   * @param {string} url 
   * @param {Object} body
   * @param {Object} headers 
   */
  patch(url, body, headers){
    return this._fetch(url, "PATCH", headers, body);
  }
}

module.exports = WebClient;