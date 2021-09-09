const lunr = require("lunr");
const fs = require("fs");
const util = require("util");

class IndexService {

  constructor(){
    this.index = lunr(function(){});
  }

  /**
   * @param {string} queryString 
   */
  query(queryString){
    const sqs = queryString && this.sanitize(queryString);

    return this.rawQuery(sqs);
  }

  /**
   * @param {string} queryString 
   */
  rawQuery(queryString){
    const results = [];

    if (queryString){
      results.push(...this.index.search(`*${queryString}*`));
      results.push(...this.index.search(`*${queryString}`));
      results.push(...this.index.search(`${queryString}*`));
      results.push(...this.index.search(queryString));
    }

    return results;
  }

  /**
   * @param {string} queryString 
   */
  sanitize(queryString){
    return queryString.replace(/[:*^~+-]/gi, "").trim();
  }

  /**
   * @param {lunr.Token} token 
   */
  defaultPipelineFunction(token){
    return token.update(function (s) {
      return s.replace(/((?!\.)^\W+)|(\W+$)/, "");
    });
  }

  /**
   * @param {(token: string) => string} pipelineFn 
   */  
  customTrimmer(pipelineFn){

    /**
     * @param {lunr.Builder} builder 
     */
    function handler(builder){
      if (!lunr.Pipeline.registeredFunctions.customTrimmer){
        lunr.Pipeline.registerFunction(pipelineFn, "customTrimmer");
      }
    
      builder.pipeline.before(lunr.stopWordFilter, pipelineFn);
      builder.pipeline.remove(lunr.trimmer);
    }

    return handler;
  }

  /**
   * @param {Function} configFn 
   */
  generateIndex(configFn){
    this.index = lunr(configFn);

    return this.index;
  }

  /**
   * @param {string} pathLike 
   */
  async import(pathLike){
    try {
      const buff = await util.promisify(fs.readFile)(pathLike);
      const jsn = JSON.parse(buff.toString());

      this.index = lunr.Index.load(jsn);
    } catch (error) {
      this.index = lunr(function(){});
    }

    return this.index;
  }

  /**
   * @param {string} pathLike 
   */
  export(pathLike){
    return util.promisify(fs.writeFile)(pathLike, JSON.stringify(this.index));
  }
}

module.exports = IndexService;