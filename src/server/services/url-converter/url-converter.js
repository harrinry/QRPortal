const UrlBuilder = require("cnjs-utils/services/web-client/url-builder");

const SECTIONS = {
  STANDARD: "std",
  HEALTH_FACTOR: "cast",
  INDEX: "idx",
  TECHNOLOGY: "t",
  EXTENSION: "srs",
};

const SERVICES = {
  AIP: "AIP",
  CARL: "CARL",
}

const PATH = {
  QUALITY_STANDARDS: "quality-standards",
  BUSINESS_CRITERIA: "business-criteria",
  CATEGORIES: "categories",
  ITEMS: "items",
  DETAILS: "details",
  TECHNOLOGIES: "technologies",
  SEARCH: "search_term",
};

class UrlConverter {
  /**
   * 
   * @param {string} baseUrl 
   * @param {import("../business-criteria-reader/reader")} businessCriteriaReader 
   * @param {import("../quality-standard-reader/service")} qualityStandardReader
   */
  constructor(baseUrl, businessCriteriaReader, qualityStandardReader){
    this.baseUrl = baseUrl;
    this.businessCriteriaReader = businessCriteriaReader;
    this.qualityStandardReader = qualityStandardReader;
  }

  /**
   * @param {{sec: string, ref: string, echo: bool, s: string}} queryParams 
   */
  async parse(queryParams = {}){
    const builder = new UrlBuilder(this.baseUrl);
    
    if(queryParams.s){
      const search = this.__parseSearch(queryParams.s);
      const reference = this.__parseReference(queryParams.ref);
      builder.append(PATH.SEARCH, search.query)

      if(reference.qualityRuleId){
        builder.append(PATH.DETAILS, reference.qualityRuleId);
      }
    } else {
      const section = this.__parseSection(queryParams.sec);
      const reference = this.__parseReference(queryParams.ref);

      builder.append(queryParams.echo ? SERVICES.CARL : SERVICES.AIP);

      if((section.sectionType === SECTIONS.STANDARD && section.sectionId === SECTIONS.HEALTH_FACTOR) || section.sectionType === SECTIONS.INDEX){
        const bcs = await this.businessCriteriaReader.list();
        let bc = null;

        builder.append(PATH.BUSINESS_CRITERIA);

        if(section.sectionType === SECTIONS.STANDARD && section.sectionId === SECTIONS.HEALTH_FACTOR){
          bc = bcs.find(_ => _.name.toLowerCase() === section.sectionId2.toLowerCase());
        } else {
          bc = bcs.find(_ => _.name.toLowerCase() === section.sectionId.toLowerCase());
        }

        if(bc) builder.append(`${bc.id}`);

      } else if(section.sectionType === SECTIONS.STANDARD){
        const qs = await this.qualityStandardReader.read(section.sectionId);
        const category = await this.qualityStandardReader.readQualityStandardCategory(qs.name, section.sectionId2);
        builder.append(PATH.QUALITY_STANDARDS, section.sectionId.toUpperCase());

        if(category) {
          builder.append(PATH.CATEGORIES, category.name);

          if(reference.subSection){
            const item = category.items.find(_ => _.id.toLowerCase() === reference.subSection.toLowerCase());

            if(item) builder.append(PATH.ITEMS, `${item.id}`);
          }
        }
      } else if(section.sectionType === SECTIONS.TECHNOLOGY){
        builder.append(PATH.TECHNOLOGIES, section.sectionId);
      }

      if(reference.qualityRuleId){
        builder.append(PATH.DETAILS, `${reference.qualityRuleId}`);
      }
    }

    return builder.build();
  }

  __parseSection(section = ""){
    const [ sectionType, sectionId, sectionId2 ] = section.split("_");

    return { sectionType, sectionId, sectionId2 };
  }

  __parseReference(ref = ""){
    const [ subSection, qualityRuleId, compareVersion ] = ref.split("|");

    return { subSection, qualityRuleId, compareVersion };
  }

  __parseSearch(search = ""){
    const [ query, searchType, qualityRuleId ] = search.split("|");

    return { query, searchType, qualityRuleId };
  }


}

module.exports = UrlConverter;