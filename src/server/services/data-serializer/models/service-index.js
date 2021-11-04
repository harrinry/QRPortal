const caseConvert = require("../../../lib/case-convert");

function ServiceIndexElement (name, description, href, displayName, iconUrl){
  this.name = name;
  this.displayName = displayName;
  this.description = description;
  this.href = href;

  this.iconUrl = iconUrl;
}

class ServiceIndex {
  /**
   * 
   * @param {string} id
   * @param {any} data 
   * @param {import("../../icon-url-builder/service")} iconUrlBuilder 
   */
  constructor(data){
    this.name = data.name;
    this.items = [];

    for (const item of data.items) {
      const { name, description, displayName } = item;
      const indexElement = new ServiceIndexElement(
        caseConvert.spaceSeparated(name), 
        description, 
        `${this.name}/${name}`,
        displayName,
      );
      this.items.push(indexElement);
    }
  }

  /**
   * @param {string} name 
   */
  getItem(name){
    const item = this.items.find(_ => _.name === name);

    return {
      name: item.name,
      displayName: item.displayName,
      description: item.description,
      href: item.href,
      iconUrl: item.iconUrl,
    }
  }
}

module.exports = ServiceIndex;