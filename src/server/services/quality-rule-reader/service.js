const { QualityRule } = require("../data-serializer/models");

class QualityRuleDataReader {

  /**
   * @param {string} folder 
   * @param {import("../data-reader/service")} dataReader
   * @param {import("../data-serializer/serializer")} serializer
   */
  constructor(dataReader, serializer){
    this.dataReader = dataReader;
    this.serializer = serializer;
  }

  async list(){
    /** @type {Array<number>} */
    const data = await this.dataReader.listQualityRules();

    return data;
  }

  /**
   * @param {number} id 
   * @returns {Promise<import("../data-serializer/models/quality-rule")>}
   */
  async read(id){
    const data = await this.dataReader.readQualityRule(id);

    return this.serializer.serialize(data, QualityRule);
  }
}

module.exports = QualityRuleDataReader;