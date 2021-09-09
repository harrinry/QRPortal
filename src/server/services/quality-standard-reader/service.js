const DataCache = require("../../lib/data-cache");
const { TimeConverter } = require("../../lib/cnjs-utils/lib/time-converter");

class QualityStandardsDataReader {

  /**
   * @param {string} folder 
   * @param {import("../data-reader/service")} dataReader
   * @param {import("../icon-url-builder/service")} iconUrlBuilder
   */
  constructor(dataReader, iconUrlBuilder){
    this.dataReader = dataReader;
    this.iconUrlBuilder = iconUrlBuilder;
    this.cache = new DataCache();

    this.cache.setRenewer(this.cacheRenewer.bind(this));
  }

  async cacheRenewer(){
    const data = await this.dataReader
  }

  list(){
    
  }

  /**
   * @param {string|number} id 
   */
  read(id){

  }
}

module.exports = QualityStandardsDataReader;