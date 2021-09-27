const caseConvert = require("../../../lib/case-convert");

function ServiceIndexElement (name, description, href, iconUrl){
  this.name = name;
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

    for (const key in data.items) {
      const element = data.items[key];
      if(caseConvert.toParamCase(key) === "rules-history" || caseConvert.toParamCase(key) === "versions") continue;
      this.items.push(new ServiceIndexElement(
        caseConvert.spaceSeparated(key),
        element.name,
        `${this.name}/${caseConvert.toParamCase(key)}`)
        );
    }

    this.items.push(new ServiceIndexElement("indexes", "Indexes in alphabetic order", `${this.name}/indexes`));
  }
}

module.exports = ServiceIndex;