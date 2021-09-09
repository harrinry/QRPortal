const { stringIsNullOrEmpty } = require("../../lib/slib");
const qs = require("querystring");
const { URL } = require("url");

class URLBuilder{
  constructor(baseUrl){
    this.base = new URL(baseUrl);
    this.paths = this.base.pathname.split(/\//gi).filter(_ => !stringIsNullOrEmpty(_));
  }

  makeFromBase(url = ""){
    let _url = this.base.toString();
    const paths = url.split("/");

    while (_url.charAt(_url.length - 1) === "/") {
      _url = _url.substr(0, _url.length - 1);
    }

    for (const path of paths) {
      if (path === "") continue;

      _url += `/${path}`;
    }

    return _url;
  }

  /**
   * @param {...string} path
   */
  append(...path){
    for (const _path of path) {
      this.paths.push(_path.replace(/\//gi, ""));
    }

    return this;
  }

  setQueryString(obj){
    const query = qs.stringify(obj);

    this.base.search = query;

    return this;
  }

  build(){
    this.base.pathname = this.paths.join("/");
    return this.base;
  }

  toString(){
    return this.build().toString();
  }
}

module.exports = URLBuilder;