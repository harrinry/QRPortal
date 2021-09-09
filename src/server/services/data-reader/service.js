const { JsonFileReader, exceptions: { JsonFileNotFoundError, JsonFileParseError } } = require("../json-file-reader");
const { ServiceIndex } = require("./models");
const types = require("./types");
const { promisify } = require("util");
const fs = require("fs");
const path = require("path");


class DataReader extends JsonFileReader {

  /**
   * @param {string} folder 
   * @param {string} entryPoint 
   */
  constructor(folder){
    super(folder);

    this.ServiceIndex = null;
  }

  async readServiceIndex(){
    const outpath = `${this.storageFolder}${this.ext}`;

    try {
      if(!this.ServiceIndex) {
        const buff = await promisify(fs.readFile)(outpath);
        const data = JSON.parse(buff.toString());
        this.ServiceIndex = new ServiceIndex(path.basename(this.storageFolder).toLowerCase(), data);
      }

      return this.ServiceIndex;
    } catch (error) {
      if(error instanceof SyntaxError){
        throw new JsonFileParseError(outpath);
      } else if(/ENOENT/gi.test(error.message)){
        throw new JsonFileNotFoundError(outpath);
      }
    }
  }

  readTechnologies(){
    return this.read(types.technologies);
  }

  /**
   * @param {number} id
   */
  readTechnology(id){
    return this.read(types.technologies, id);
  }

  /**
   * @param {number} id
   */
  readTechnologyQualityRules(id){
    return this.read(types.technologies, id, types.qualityRules);
  }

  /**
   * @param {string} id 
   */
  readBuisnessCriteria(id){
    return this.read(types.businessCriteria, id);
  }

  listBuisnessCriteria(){
    return this.read(types.businessCriteria);
  }

  /**
   * @param {string} id
   */
  readExtension(id){
    return this.read(types.extensions, id);
  }

  listExtensions(){
    return this.read(types.extensions);
  }

  /**
   * @param {string} id
   */
  listExtensionVersions(id){
    return this.read(types.extensions, id, types.versions);
  }

  /**
   * @param {string} id 
   * @param {string} version 
   */
  readExtensionVersionQualityRules(id, version){
    return this.read(types.extensions, id, types.versions, version, types.qualityRules);
  }

  async listQualityRules(){
    const files = await promisify(fs.readdir)(path.join(this.storageFolder, types.qualityRules));
    return files.map(_ => parseInt(path.basename(_, this.ext)));
  }

  /**
   * @param {number} id 
   */
  readQualityRule(id){
    return this.read(types.qualityRules, id);
  }

  listQualityStandards(){
    return this.read(types.qualityStandards);
  }

  /**
   * @param {string} qualityStandardId 
   */
  listQualityStandardCategories(qualityStandardId){
    return this.read(types.qualityStandards, qualityStandardId, types.categories);
  }

  /**
   * @param {string} qualityStandardId 
   * @param {string} categoryName
   */
  readQualityStandardCategory(qualityStandardId, categoryName){
    return this.read(types.qualityStandards, qualityStandardId, types.categories, categoryName);
  }

  /**
   * @param {string} qualityStandardId 
   * @param {string} categoryName
   */
  listQualityStandardCategoryItems(qualityStandardId, categoryName){
    return this.read(types.qualityStandards, qualityStandardId, types.categories, categoryName, types.items);
  }

  /**
   * @param {string} qualityStandardId 
   */
  listQualityStandardItems(qualityStandardId){
    return this.read(types.qualityStandards, qualityStandardId, types.items);
  }

  /**
   * @param {string} qualityStandardId 
   * @param {string} itemId
   */
  readQualityStandardItem(qualityStandardId, itemId){
    return this.read(types.qualityStandards, qualityStandardId, types.items, itemId);
  }
  
  /**
   * @param {string} qualityStandardId 
   * @param {string} itemId
   */
  listQualityStandardItemQualityRules(qualityStandardId, itemId){
    return this.read(types.qualityStandards, qualityStandardId, types.items, itemId, types.qualityRules);
  }
}

module.exports = DataReader;