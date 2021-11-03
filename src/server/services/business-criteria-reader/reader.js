const { BaseBusinessCriteria, QualityRuleReference, BusinessCriteria, TechnicalCriteriaReference  } = require("../data-serializer/models");

class BusinessCriteriaDataReader {

  /**
   * @param {import("../data-reader/service")} dataReader
   * @param {import("../data-serializer/serializer")} serializer
   */
  constructor(dataReader, serializer){
    this.dataReader = dataReader;
    this.serializer = serializer;
  }

  /**
   * @returns {Promise<import("../data-serializer/models/base-business-criteria")[]>}
   */
  async list(){
    const businessCriterias = await this.dataReader.listBuisnessCriteria();

    return this.serializer.serialize(businessCriterias, BaseBusinessCriteria);
  }

  /**
   * @param {string} id 
   * @returns {Promise<import("../data-serializer/models/business-criteria")}
   */
  async read(id){
    const data = await this.dataReader.readBuisnessCriteria(`${id}`);
    const model = this.serializer.serialize(data, BusinessCriteria);

    model.qualityRules = this.serializer.serialize(await this.dataReader.listBuisnessCriteriaQualityRules(id), QualityRuleReference);

    try {
      model.technicalCriteria = this.serializer.serialize(await this.dataReader.listBuisnessCriteriaTechnicalCriterias(id), TechnicalCriteriaReference);
    } catch (error) {
      // ignore the error and set technical criteria to empty array
      model.technicalCriteria = [];
    }

    return model;
  }

}

module.exports = BusinessCriteriaDataReader;