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
  async readTechnology(id){
    return this.read(types.technologies, await this.matchId(id, types.technologies));
  }

  /**
   * @param {number} id
   */
  async readTechnologyQualityRules(id){
    return this.read(types.technologies, await this.matchId(id, types.technologies), types.qualityRules);
  }

  /**
   * @param {string} id 
   */
  async readBuisnessCriteria(id){
    return this.read(types.businessCriteria, await this.matchId(id, types.businessCriteria));
  }

  listBuisnessCriteria(){
    return this.read(types.businessCriteria);
  }

  /**
   * @param {string} id
   */
  async readExtension(id){
    return this.read(types.extensions, await this.matchId(id, types.extensions));
  }

  listExtensions(){
    return this.read(types.extensions);
  }

  /**
   * @param {string} id
   */
  async listExtensionVersions(id){
    return this.read(types.extensions, await this.matchId(id, types.extensions), types.versions);
  }

  /**
   * @param {string} id 
   * @param {string} version 
   */
  async readExtensionVersionQualityRules(id, version){
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
   * @param {string} id 
   * @param  {...string} folderPath 
   */
  async matchId(id, ...folderPath){
    const fileList = await this.listFiles(...folderPath);
    const caseSensitiveId = fileList.find(_ => _.toLowerCase() === id.toLowerCase());

    if(!caseSensitiveId) throw new JsonFileNotFoundError(path.join(...folderPath, id));

    return caseSensitiveId;
  }

  matchQualityStandardId(id){
    return this.matchId(id, types.qualityStandards);
  }

  async matchQualityStandardCategoryId(standardId, categoryName){
    return this.matchId(categoryName, types.qualityStandards, await this.matchQualityStandardId(standardId), types.categories);
  }

  async matchQualityStandardItemId(standardId, itemsId){
    return this.matchId(itemsId, types.qualityStandards, await this.matchQualityStandardId(standardId), types.items);
  }

  /**
   * @param {string} qualityStandardId 
   */
  async readQualityStandard(qualityStandardId){
    return this.read(types.qualityStandards, await this.matchQualityStandardId(qualityStandardId));
  }

  /**
   * @param {string} qualityStandardId 
   */
  async listQualityStandardCategories(qualityStandardId){
    return this.read(types.qualityStandards, await this.matchQualityStandardId(qualityStandardId), types.categories);
  }

  /**
   * @param {string} qualityStandardId 
   * @param {string} categoryName
   */
  async readQualityStandardCategory(qualityStandardId, categoryName){
    return this.read(types.qualityStandards, await this.matchQualityStandardId(qualityStandardId), 
      types.categories, await this.matchQualityStandardCategoryId(qualityStandardId, categoryName));
  }

  /**
   * @param {string} qualityStandardId 
   * @param {string} categoryName
   */
  async listQualityStandardCategoryItems(qualityStandardId, categoryName){
    return this.read(types.qualityStandards, await this.matchQualityStandardId(qualityStandardId), 
      types.categories,await  this.matchQualityStandardCategoryId(qualityStandardId, categoryName), types.items);
  }

  /**
   * @param {string} qualityStandardId 
   */
  async listQualityStandardItems(qualityStandardId){
    return this.read(types.qualityStandards, await this.matchQualityStandardId(qualityStandardId), types.items);
  }

  /**
   * @param {string} qualityStandardId 
   * @param {string} itemId
   */
  async readQualityStandardItem(qualityStandardId, itemId){
    return this.read(types.qualityStandards, await this.matchQualityStandardId(qualityStandardId), 
      types.items, await this.matchQualityStandardItemId(qualityStandardId, itemId));
  }
  
  /**
   * @param {string} qualityStandardId 
   * @param {string} itemId
   */
  async listQualityStandardItemQualityRules(qualityStandardId, itemId){
    return this.read(types.qualityStandards, await this.matchQualityStandardId(qualityStandardId), 
      types.items, await this.matchQualityStandardItemId(qualityStandardId, itemId), types.qualityRules);
  }
}

module.exports = DataReader;