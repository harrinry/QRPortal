// const DataCache = require("../../lib/data-cache");
// const { TimeConverter } = require("../../lib/cnjs-utils/lib/time-converter");
const { inArray } = require("../../lib/cnjs-utils/lib/array");
const { BaseQualityStandard, QualityStandard, QualityStandardCategory, QualityStandardItem, QualityStandardItemReference, QualityRuleReference, QualityTemplateReference } = require("../data-serializer/models");

class QualityStandardsDataReader {

  /**
   * @param {string} folder 
   * @param {import("../data-reader/service")} dataReader
   * @param {import("../data-serializer/serializer")} serializer
   */
  constructor(dataReader, serializer){
    this.dataReader = dataReader;
    this.serializer = serializer;

    this.qualityStandardsToFilter = ["AIP", "PCI-DSS-V3.1"];
  }

  /**
   * 
   * @returns {Promise<import("../data-serializer/models/base-quality-standard")[]>}
   */
  async list(){
    /** @type {Array<any>} */
    const data = await this.dataReader.listQualityStandards();

    return this.serializer.serialize(data.filter(_ => !inArray(this.qualityStandardsToFilter, _.name)), BaseQualityStandard);
  }

  async readQualityStandardCategory(qualityStandardId, categoryId){
    const qualityStandardCategory = await this.dataReader.readQualityStandardCategory(qualityStandardId, categoryId);
    /** @type {Array<any>} */
    const categoryItems = await this.dataReader.listQualityStandardCategoryItems(qualityStandardId, categoryId);

    /**@type {import("./models/quality-standard-category")} */
    const model = this.serializer.serialize(qualityStandardCategory, QualityStandardCategory);

    model.items = this.serializer.serialize(categoryItems, QualityStandardItem, model.href);

    return model;
  }

  async readQualityStandardItems(qualityStandardId, categoryId, itemId){
    const qualityStandardCategory = await this.dataReader.readQualityStandardCategory(qualityStandardId, categoryId);
    const qualityStandardItem = await this.dataReader.readQualityStandardItem(qualityStandardId, itemId);
    /** @type {Array<any>} */
    const rules = await this.dataReader.listQualityStandardItemQualityRules(qualityStandardId, itemId);
    
    /**@type {import("./models/quality-standard-category")} */
    const qualityStandardCategoryModel = this.serializer.serialize(qualityStandardCategory, QualityStandardCategory);

    /**@type {import("../data-serializer/models/quality-standard-item-reference")} */
    const model = this.serializer.serialize(qualityStandardItem, QualityStandardItemReference);

    model.href = [qualityStandardCategoryModel.href, "items", model.id].join("/");

    model.qualityRules = this.serializer.serialize(rules, QualityRuleReference);

    try {
      /** @type {Array<any>} */
      const templates = await this.dataReader.listQualityStandardItemQualityTemplates(qualityStandardId, itemId);
      model.qualityTemplates = this.serializer.serialize(templates, QualityTemplateReference);
    } catch (error) {
      // ignore and move on
    }

    return model;
  }

  /**
   * @param {string} qualityStandardId 
   */
  async read(qualityStandardId){
    const standard = await this.dataReader.readQualityStandard(qualityStandardId);
    const categories = await this.dataReader.listQualityStandardCategories(qualityStandardId);

    /**@type {import("../data-serializer/models/quality-standard")} */
    const model = this.serializer.serialize(standard, QualityStandard);

    model.items = this.serializer.serialize(categories, BaseQualityStandard);

    return model;
  }
}

module.exports = QualityStandardsDataReader;