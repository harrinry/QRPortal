const TechnologyGroup = require("./technology-group");
const { inArray } = require("../../../lib/cnjs-utils/lib/array");

class TechnologyGroupMapping {
  constructor(groups = []){
    this.technologies = {};
    this.groups = {};

    for (const group of groups) {
      const _group = new TechnologyGroup(group.id, group.name, group.technologies, group.iconUrl);

      this.groups[_group.id] = _group;
      for (const technologyId of _group.technologies) {
        if(!!this.technologies[technologyId]) continue;
        this.technologies[technologyId] = _group.id;
      }
    }
  }

  /**
   * @param {string} technologyId 
   */
  isGroup(technologyId){
    return !!this.groups[technologyId];
  }

  /**
   * @param {number} technologyId 
   */
  inGroup(technologyId){
    return !!this.technologies[technologyId];
  }

  /**
   * @param {number} technologyId 
   * @returns {number}
   */
  getGroupId(technologyId){
    return this.technologies[technologyId];
  }

  /**
   * @param {number} groupId 
   * @returns {TechnologyGroup}
   */
  getGroup(groupId){
    return this.groups[groupId];
  }
}

module.exports = TechnologyGroupMapping;