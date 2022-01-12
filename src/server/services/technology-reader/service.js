const { JsonFileReader } = require("../json-file-reader");
const { TechnologyGroupMapping, TechnologyGroup } = require("./models");
const { Technology } = require("../data-reader/models");
const DataCache = require("../../lib/data-cache");
const { TimeConverter } = require("../../lib/cnjs-utils/lib/time-converter");
const types = require("./types");
const drTypes = require("../data-reader/types");

class TechnologyDataReader extends JsonFileReader{

  /**
   * @param {string} folder 
   * @param {import("../data-reader/service")} dataReader
   * @param {import("../icon-url-builder/service")} iconUrlBuilder
   */
  constructor(staticMappingDir, dataReader, iconUrlBuilder){
    super(staticMappingDir);
    this.dataReader = dataReader;
    this.iconUrlBuilder = iconUrlBuilder;
    this.cache = new DataCache();

    this.cache.setRenewer(this.cacheRenewer.bind(this));
  }

  async readTechnology(id){
    let tech = new Technology();

    if (await this.IsGroupId(id)){
      const techGroup = await this.readTechnologyGroup(id);
      tech = new Technology(techGroup);

      for (const technologyId of techGroup.technologies) {
        const qrData = await this.dataReader.readTechnologyQualityRules(typeof technologyId === "number" ? technologyId.toString() : technologyId);
        tech.setQualityRules(qrData);
        
        try {
          const qtData = await this.dataReader.readTechnologyQualityTemplates(typeof technologyId === "number" ? technologyId.toString() : technologyId);
          tech.setQualityTemplates(qtData);
        } catch (error) {
          console.log(error.stack);
          // ignore and more on
        }
      }
    } else {
      const data = await this.dataReader.readTechnology(id);
      const qrData = await this.dataReader.readTechnologyQualityRules(id);
      tech = new Technology(data);

      tech.setQualityRules(qrData);

      try {
        const qtData = await this.dataReader.readTechnologyQualityTemplates(typeof id === "number" ? id.toString() : id);
        tech.setQualityTemplates(qtData);
      } catch (error) {
        console.log(error.stack);
        // ignore and more on
      }

      tech.iconUrl = this.iconUrlBuilder.createIconUrl(id);
    }

    return tech;
  }

  /**
   * @returns {Array<TechnologyGroup>}
   */
  async readConsolidatedTechnologies(){
    const technologies = await this.dataReader.readTechnologies();
    const consolidatedTechnologies = {};

    for (const technology of technologies) {
      if(await this.technologyInGroup(technology.id)){
        const groupId = await this.getGroupIdFromTechnologyId(technology.id);

        if(!consolidatedTechnologies[groupId]){
          const group = await this.readTechnologyGroup(groupId);
          consolidatedTechnologies[groupId] = new TechnologyGroup(
            group.id, 
            group.name, 
            group.technologies,
            group.iconUrl,
            `${this.dataReader.entryPoint}/${drTypes.technologies}/${groupId}`,
          );
        }

      } else {
        consolidatedTechnologies[technology.id] = new TechnologyGroup(
          technology.id, 
          technology.name, 
          undefined,
          this.iconUrlBuilder.createIconUrl(technology.id),
          technology.href,
        );
      }
    }

    return Object.values(consolidatedTechnologies);
  }

  /**
   * @param {number} technologyId 
   */
  async getGroupIdFromTechnologyId(technologyId){
    const groupMapping = await this.readTechnologyGroups();

    return groupMapping.getGroupId(technologyId);
  }

  async readTechnologyGroups(){
    if(!this.cache.isDataSet()){
      await this.cache.renew();
      this.cache.setLifeCycle(new TimeConverter().addHours(1).toMilliseconds());
    }

    return this.cache.getData();
  }

  async cacheRenewer(){
    const data = await this.read(types.technologyGroups);
    return new TechnologyGroupMapping(data);
  }

  /**
   * @param {string} groupId 
   */
  async readTechnologyGroup(groupId){
    const groupMapping = await this.readTechnologyGroups();

    return groupMapping.getGroup(groupId);
  }

  /**
   * @param {number} technologyId 
   */
   async technologyInGroup(technologyId){
    const groupMapping = await this.readTechnologyGroups();

    return groupMapping.inGroup(technologyId);
  }

  /**
   * @param {number} technologyId 
   */
   async IsGroupId(technologyId){
    const groupMapping = await this.readTechnologyGroups();

    return groupMapping.isGroup(technologyId);
  }
}

module.exports = TechnologyDataReader;