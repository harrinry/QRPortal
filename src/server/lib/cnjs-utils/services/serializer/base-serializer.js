
class BaseSerializer {

  /**
   * @param {NewableFunction} Ctor 
   */
  constructor(Ctor){
    this.Ctor = Ctor;
  }

  /**
   * @param {Array<any>|any} httpResponse 
   */
  serialize(httpResponse){
    if (Array.isArray(httpResponse)){
      return this.__serializeArray(httpResponse);
    } else if (typeof httpResponse === "object"){
      return this.__serialize(httpResponse);
    }

    return null;
  }

  /**
   * @param {Array<any>} httpResponse 
   */
  __serializeArray(httpResponse){
    const list = [];

    for (const data of httpResponse) {
      const serialized = this.__serialize(data);

      list.push(serialized);
    }

    return list;
  }

  __serialize(){
    throw new Error("__serialize has not been implemented");
  }
}

module.exports = { BaseSerializer };