const IOCContainer = require("./container");
const IOCResolution = require("./resolution");
const Types = require("./resolution-types");

function createBuilder(){
  return new IOCBuilder(IOCContainer, IOCResolution);
}

class IOCBuilder {

  /**
   * @param {IOCContainer} containerCtor 
   * @param {IOCResolution} resolutionCtor
   */
  constructor( containerCtor, resolutionCtor ){
    this.containerType = containerCtor;
    this.resolutionType = resolutionCtor;

    /**@type {Set<IOCResolution>} */
    this.registrations = new Set();
  }

  /**
   * @param {string} type 
   * @param {string} id 
   * @param {any} invokable 
   * @param {string[]} dependencies 
   */
  createRegistration(type, id, invokable, dependencies = []){
    const ResolutionCtor = this.resolutionType;
    const res = new ResolutionCtor(type, id, invokable, dependencies);
    this.registrations.add(res);
  }

  /**
   * @param {string} type 
   * @param {NewableFunction} ctor 
   * @param {string[]} dependencies 
   */
  registerSingleton(type, ctor, dependencies){
    this.createRegistration(Types.Singleton, type, ctor, dependencies);
    return this;
  }

  /**
   * @param {string} type 
   * @param {NewableFunction} ctor 
   * @param {string[]} dependencies 
   */
  register(type, ctor, dependencies){
    this.createRegistration(Types.Standard, type, ctor, dependencies);
    return this;
  }

  /**
   * @param {string} type 
   * @param {any} value 
   */
  registerConstant(type, value){
    this.createRegistration(Types.Constant, type, value);
    return this;
  }

  /**
   * @param {string} type 
   * @param {NewableFunction} ctor 
   */
  registerConstructor(type, ctor){
    this.createRegistration(Types.Constructor, type, ctor);
    return this;
  }

  /**
   * 
   * @param {string} type 
   * @param {(context: IOCContainer) => any} facFunc 
   */
  registerFactory(type, facFunc){
    this.createRegistration(Types.Factory, type, facFunc);
    return this;
  }

  /**
   * 
   * @param {string} type 
   * @param {NewableFunction} ctor 
   * @param {string[]} dependencies 
   */
  registerAutoFactory(type, ctor, dependencies){
    this.createRegistration(Types.AutoFactory, type, ctor, dependencies);
    return this;
  }

  /**
   * @returns {IOCContainer}
   */
  populate(){
    const ContainerCtor = this.containerType;
    return new ContainerCtor(this.registrations);
  }
}

module.exports = {
  createBuilder,
  IOCBuilder,
}