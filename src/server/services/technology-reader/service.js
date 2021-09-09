const { JsonFileReader } = require("../json-file-reader");
const { TechnologyGroupMapping, TechnologyGroup } = require("./models");
const { Technology } = require("../data-reader/models");
const DataCache = require("../../lib/data-cache");
const { TimeConverter } = require("../../lib/cnjs-utils/lib/time-converter");
const types = require("./types");

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
    if (await this.technologyInGroup(id)) {
      const techGroup = await this.readTechnologyGroup(this.getGroupIdFromTechnologyId(id));
      tech = new Technology(techGroup);

      for (const technologyId of techGroup.technologies) {
        const qrData = await this.dataReader.readTechnologyQualityRules(technologyId);
        tech.setQualityRules(qrData);
      }
    } else {
      const data = await this.dataReader.readTechnology(id);
      const qrData = await this.dataReader.readTechnologyQualityRules(id);
      tech = new Technology(data);

      tech.setQualityRules(qrData);
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
          consolidatedTechnologies[groupId] = group;
        }

      } else {
        consolidatedTechnologies[technology.id] = new TechnologyGroup(
          technology.id, 
          technology.name, 
          undefined,
          this.iconUrlBuilder.createIconUrl(technology.id)
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
}

module.exports = TechnologyDataReader;