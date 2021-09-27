const { QualityRule, QualityRuleReference } = require("../data-serializer/models");

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

  async readAll(){
    const items = await this.list();
    const output = [];

    for (const item of items) {
      output.push(await this.read(item));
    }

    return output;
  }

  /**
   * @param {number[]} ids
   */
  async listQualityRuleReferences(ids = []){
    const output = [];

    for (const id of ids) {
      const data = await this.dataReader.readQualityRule(id);

      output.push(this.serializer.serialize(data, QualityRuleReference));
    }

    return output;
  }
}

module.exports = QualityRuleDataReader;