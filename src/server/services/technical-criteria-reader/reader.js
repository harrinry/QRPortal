const { TechnicalCriteria, QualityRuleReference  } = require("../data-serializer/models");

class TechnicalCriteriaDataReader {

  /**
   * @param {import("../data-reader/service")} dataReader
   * @param {import("../data-serializer/serializer")} serializer
   */
  constructor(dataReader, serializer){
    this.dataReader = dataReader;
    this.serializer = serializer;
  }

  /**
   * @param {string} id 
   */
  async read(id){
    const data = await this.dataReader.readTechnicalCriteria(`${id}`);
    const model = this.serializer.serialize(data, TechnicalCriteria);

    model.qualityRules = this.serializer.serialize(await this.dataReader.readTechnicalCriteriaQualityRules(id), QualityRuleReference);

    return model;
  }

}

module.exports = TechnicalCriteriaDataReader;