const caseConvert = require("../../../lib/case-convert");

function ServiceIndexElement (name, description, href){
  this.name = name;
  this.description = description;
  this.href = href;
}

class ServiceIndex {
  constructor(id, data){
    this.id = id;
    this.items = [];

    for (const key in data) {
      const element = data[key];
      if(caseConvert.toParamCase(key) === "rules-history") continue;
      this.items.push(new ServiceIndexElement(caseConvert.spaceSeparated(key), element.name, `${this.id}/${caseConvert.toParamCase(key)}`));
    }

    this.items.push(new ServiceIndexElement("indexes", "Indexes in alphabetic order", `${this.id}/indexes`));
  }
}

module.exports = ServiceIndex;