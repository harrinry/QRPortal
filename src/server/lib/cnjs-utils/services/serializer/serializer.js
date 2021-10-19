const caseConverter = require("../../lib/case-converter");

const parameterConvention = {
  SNAKECASE: "SNAKECASE",
  PASCALCASE: "PASCALCASE",
  CAMELCASE: "CAMELCASE",
  PARAMCASE: "PARAMCASE",
};

class Serializer {

  /**
   * @param {"SNAKECASE" | "PASCALCASE" | "CAMELCASE" | "PARAMCASE"} paramConvertion 
   */
  constructor(convention){
    this.convention = convention || parameterConvention.CAMELCASE;
  }

  /**
   * @param {Array<any> | any} data
   * @param {NewableFunction} Model
   * @param {...any} params
   */
  serialize(data, Model, ...params){
    if (Array.isArray(data)){
      return this.__serializeArray(data, Model, ...params);
    } else if (typeof data === "object"){
      return this.__serialize(data, Model, ...params);
    }

    return null;
  }

  /**
   * @param {any} data
   * @param {NewableFunction} Model
   * @param {...any} params added in case the user wants to overload the default behaviour
   */
  __serialize(data, Model, ...params){
    const instance = new Model(data);
    
    for (const key in data) {
      const param = this.__matchConvention(key);

      if(typeof data[key] === "object" && this.__isConstructor(instance[param])){
        instance[param] = this.serialize(data[key], instance[param]);
      } else {
        instance[param] = data[key];
      }
    }

    return instance;
  }

  /**
   * @param {Array<any>} array
   * @param {NewableFunction} Model
   * @param {...any} params
   */
  __serializeArray(array, Model, ...params){
    const list = [];

    for (const data of array) {
      const serialized = this.__serialize(data, Model, ...params);

      list.push(serialized);
    }

    return list;
  }

  /**
   * @param {string} paramName 
   */
  __matchConvention(paramName){
    const converter = caseConverter(paramName);

    switch (this.convention) {
    case parameterConvention.SNAKECASE:
      return converter.toSnakeCase();
    case parameterConvention.PASCALCASE:
      return converter.toPascalCase();
    case parameterConvention.CAMELCASE:
      return converter.toCamelCase();
    default:
      return converter.toCamelCase();
    }
  }

  __isConstructor(value){
    if(value === null || value === undefined) return false;
    try {
      new value();

      return true;
    } catch {
      return false
    }
  }
}

module.exports = { Serializer, parameterConvention };