
/**
 * @typedef {import("./models/quality-standard")} QualityStandard
 */

class QualityStandardSerializer {

  /**
   * @param {import("../icon-url-builder/service")} iconUrlBuilder 
   */
  constructor(iconUrlBuilder){
    this.iconUrlBuilder = iconUrlBuilder;
  }

  /**
   * @param {QualityStandard} model 
   */
  serialize(model){

    const iconBuilder = this.iconUrlBuilder;

    return {
      id: model.id,
      name: model.name,
      href: model.href + "/categories",
      url: model.url,
      icon: iconBuilder.createIconUrl(model.id.toLowerCase()),
      description: model.description,
      isoPatterns: model.isoPatterns,
      count: model.count,
      qualityRules: model.qualityRules
    }
  }

  serializeList(models = []){
    const out = [];
    
    for (let i = 0; i < models.length; i++) {
      const model = models[i];
      
      out.push(this.serialize(model));
    }

    return out;
  }
}

module.exports = QualityStandardSerializer;