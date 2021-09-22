const { BaseSerializer } = require("../../lib/cnjs-utils/services/serializer");
const { BaseQualityStandard, QualityStandard, QualityStandardCategory, QualityStandardItem, 
  QualityRuleReference, QualityRule, QualityStandardItemReference, BaseExtension, ExtensionVersion, Extension } = require("./models");

/**
 * @typedef {import("./models/base-quality-standard")} IBaseQualityStandard
 * @typedef {import("./models/quality-standard")} IQualityStandard
 * @typedef {import("../icon-url-builder/service")} IconUrlBuilder
 */

class BaseDataSerializer extends BaseSerializer {
  constructor(clsConstructor){
    super(clsConstructor);
  }

  __serialize(data){
    const Ctor = this.Ctor;
    const model = new Ctor(data);

    return model;
  }
}
class DataSerializer extends BaseDataSerializer {
  
  /**
   * @param {IconUrlBuilder} iconUrlBuilder 
   */
  constructor(iconUrlBuilder, clsConstructor){
    super(clsConstructor);

    this.iconBuilder = iconUrlBuilder;
  }

  __serialize(data){
    const model = super.__serialize(data);

    model.iconUrl = data.name ? this.iconBuilder.createIconUrl(data.name.toLowerCase()) : null;

    return model;
  }
}

class ExtensionDataSerializer extends BaseSerializer {
  
  /**
   * @param {IconUrlBuilder} iconUrlBuilder 
   */
  constructor(iconUrlBuilder, clsConstructor){
    super(clsConstructor);

    this.iconBuilder = iconUrlBuilder;
  }

  __serialize(data){
    const Ctor = this.Ctor;
    const model = new Ctor(data);

    if(!model.iconUrl){
      model.iconUrl = data.name ? this.iconBuilder.createIconUrl(data.name.toLowerCase()) : null;
    }

    return model;
  }
}

class QualityStandardItemReferenceSerializer extends BaseSerializer {
  
  /**
   * @param {IconUrlBuilder} iconUrlBuilder 
   */
  constructor(iconUrlBuilder){
    super(QualityStandardItemReference);

    this.iconBuilder = iconUrlBuilder;
  }

  __serialize(data){
    const Ctor = this.Ctor;
    const model = new Ctor(data);

    model.iconUrl = data.name ? this.iconBuilder.createIconUrl(data.id.toLowerCase()) : null;

    return model;
  }
}

class QualityStandardItemSerializer extends BaseSerializer {
  constructor(iconUrlBuilder){
    super(QualityStandardItem);

    this.iconBuilder = iconUrlBuilder;
  }

  __serialize(data){
    const Ctor = this.Ctor;
    const model = new Ctor(data);

    model.iconUrl = data.id ? this.iconBuilder.createIconUrl(data.id.toLowerCase()) : null;

    // const _path = data.href.split("/");

    // _path[3] = "sections"

    // model.href = _path.join("/");

    return model;
  }
}

class Serializer {

  /**
   * @param {import("../icon-url-builder/service")} iconUrlBuilder 
   */
  constructor(iconUrlBuilder){
    this.iconUrlBuilder = iconUrlBuilder;
    this.baseQualityStandardSerializer = new DataSerializer(iconUrlBuilder, BaseQualityStandard);
    this.qualityStandardSerializer = new DataSerializer(iconUrlBuilder, QualityStandard);
    this.qualityStandardCategorySerializer = new DataSerializer(iconUrlBuilder, QualityStandardCategory);
    this.qualityStandardCategoryItemSerializer = new QualityStandardItemSerializer(iconUrlBuilder);
    this.qualityStandardItemReferenceSerializer = new QualityStandardItemReferenceSerializer(iconUrlBuilder);
    this.qualityRuleReferenceSerializer = new BaseDataSerializer(QualityRuleReference);
    this.baseExtensionSerializer = new ExtensionDataSerializer(iconUrlBuilder, BaseExtension);
    this.extensionSerializer = new ExtensionDataSerializer(iconUrlBuilder, Extension);
    this.extensionVersionSerializer = new BaseDataSerializer(ExtensionVersion);
    this.qualityRuleSerializer = new BaseDataSerializer(QualityRule);
  }

  serialize(data, type){

    switch (type) {
      case BaseQualityStandard:
        return this.baseQualityStandardSerializer.serialize(data);
      case QualityStandard:
        return this.qualityStandardSerializer.serialize(data);
      case QualityStandardCategory:
        return this.qualityStandardCategorySerializer.serialize(data);
      case QualityStandardItem:
        return this.qualityStandardCategoryItemSerializer.serialize(data);
      case QualityRuleReference:
        return this.qualityRuleReferenceSerializer.serialize(data);
      case QualityStandardItemReference:
        return this.qualityStandardItemReferenceSerializer.serialize(data);
      case BaseExtension:
        return this.baseExtensionSerializer.serialize(data);
      case ExtensionVersion:
        return this.extensionVersionSerializer.serialize(data);
      case Extension:
        return this.extensionSerializer.serialize(data);
      default:
        throw new Error(`Serializer Type unknown: ${type && type.name}`);
    }
  }
}

module.exports = Serializer;