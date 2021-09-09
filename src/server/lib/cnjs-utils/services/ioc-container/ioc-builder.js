if (!Reflect.defineMetadata) require("reflect-metadata");
const inversify = require("inversify");
const helpers = require("inversify-vanillajs-helpers").helpers;

/**
 * @typedef {Symbol|string} Type
 * @typedef {import("inversify-vanillajs-helpers").inversifyInterfaces.BindingInWhenOnSyntax} BindingInWhenOnSyntax
 * @typedef {import("inversify-vanillajs-helpers").inversifyInterfaces.FactoryCreator} Factory
 * @typedef {(binding: BindingInWhenOnSyntax) => void } Constraint
 */

class IocBuilder {
  constructor(){
    this.cntr = new inversify.Container({
      skipBaseClassChecks: true,
    });
  }

  getContainer(){
    return this.cntr;
  }

  /**
   * @param {Type} type
   * @param {any} value
   */
  registerConstant(type, value){
    helpers.registerConstantValue(this.cntr)(type, value);
    return this;
  }

  /**
   * @param {NewableFunction} ctor
   */
  registerSelf(ctor){
    helpers.registerSelf(this.cntr)(ctor);
    return this;
  }

  /**
   * @param {Type} type
   * @param {NewableFunction} ctor
   * @param {Type[]} dependencyTypes
   * @param {Constraint} constraint
   */
  register(type, ctor, dependencyTypes, constraint){
    helpers.register(this.cntr)(type, dependencyTypes, constraint)(ctor);
    return this;
  }

  /**
   * @param {Type} type
   * @param {Factory} factory
   * @param {Constraint} constraint
   */
  registerSingleton(type, factory, constraint){
    let instance = null;

    helpers.registerFactory(this.cntr)(type, (context) => {
      if (!instance){
        instance = factory(context);
      }

      return instance;
    }, constraint);

    return this;
  }

  /**
   * @param {Type} type
   * @param {Factory} factory
   * @param {Constraint} constraint
   */
  registerFactory(type, factory, constraint){
    helpers.registerFactory(this.cntr)(type, factory, constraint);
    return this;
  }

  /**
   * @param {Type} type
   * @param {NewableFunction} Ctor
   * @param {Constraint} constraint
   */
  registerAutoFactory(type, Ctor, constraint){

    const defaultFac = () => () => new Ctor();

    helpers.registerFactory(this.cntr)(type, defaultFac, constraint);
    return this;
  }

  /**
   * @param {Type} type
   * @param {NewableFunction} ctor
   * @param {Constraint} constraint
   */
  registerConstructor(type, ctor, constraint){
    helpers.registerConstructor(this.cntr)(type, constraint)(ctor);
    return this;
  }

  /**
   * @param {Type} type
   * @param {CallableFunction} func
   * @param {Constraint} constraint
   */
  registerFunction(type, func, constraint){
    helpers.registerFunction(this.cntr)(type, func, constraint);
    return this;
  }
}

module.exports = IocBuilder;