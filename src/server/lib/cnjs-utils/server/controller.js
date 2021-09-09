const { Router } = require("express");
const { StaticController } = require("./static-controller");

const controllerClassKeys = [
  "$initChildControllers",
  "$autoBind",
  "$autoBindInherited",
  "$init",
  "$initRoutes",
  "$initMW",
  "$postprocess",
  "$preprocess",
  "$inject",
  "constructor",
  "get",
  "put",
  "post",
  "patch",
  "use",
  "delete",
  "options"
];

/**
 * @abstract
 */
class Controller{

  /** 
   * @param {import("./controller").ControllerOptions} options
   * @param {Controller[]} controllers 
   * */
  constructor(options = {}, ...controllers){
    
    if( typeof options === "string" ) options = { baseUrl: options };

    this.router = Router({
      caseSensitive: options.caseSensitive || false,
      strict: options.strict,
      mergeParams: options.mergeParams,
    });

    this.log = options.logger || console;
    this.baseUrl = options.baseUrl;
    this.middleware = options.middleware || [];
    this.dependencies = options.dependencies || [];
    
    this.childControllers = controllers || [];
    if(options.autoBind) this.$autoBindInherited();
  }

  async $initChildControllers(){
    for (const controller of this.childControllers) {
      try{
        const childController = (controller instanceof Controller || controller instanceof StaticController) 
          ? controller 
          : new controller(...this.dependencies);

        await childController.$init( this.router );
      } catch( error ){
        this.log.error(`Controller Initialization Error on ${controller.constructor.name}`);
        this.log.error(error.message);
        this.log.error(error.stack);
      }
    }
  }

  /**
   * @param {Express.Application|Router} app 
   * @param {string} contextPath
   */
  async $init(app, contextPath = ""){
    if(!app) return;
    this.$initMW();
    await this.$preprocess();
    await this.$initChildControllers();
    this.$initRoutes();
    app.use(contextPath + this.baseUrl, this.router);
    await this.$postprocess();
  }

  /**
   * @abstract
   */
  async $preprocess(){}

  /**
   * @abstract
   */
  async $postprocess(){}

  $initRoutes(){
    const prototype = Object.getPrototypeOf(this);
    const methods = Object.getOwnPropertyNames( prototype )
      .filter( _ => this[_] instanceof Function && controllerClassKeys.indexOf(_) === -1);

    for (const member of methods) {
      const routeOptions = Reflect.getOwnMetadata(member, prototype);
      
      if( routeOptions ){
        const { httpVerb, path, middleware } = routeOptions;
        if(!(this[httpVerb] instanceof Function)) continue;
        if( middleware && Array.isArray(middleware) ){
          this[httpVerb](path, ...middleware.reverse(), this[member]);
        } else {
          this[httpVerb](path, this[member]);
        }
      }
    }
  }

  $initMW(){
    for (const middleware of this.middleware) {
      this.router.use(middleware);
    }
  }
  
  /**
   * @param {Function} method 
   */
  $autoBind( method ){
    const name = method.name;
    this[name] = method.bind(this);
  }

  $autoBindInherited(){
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
      .filter( _ => this[_] instanceof Function && controllerClassKeys.indexOf(_) === -1);
    
    for (const methodName of methods) {
      this.$autoBind(this[methodName]);
    }
  }

  /**
   * @param {Function} method
   * @param {...any} params
   */
  $inject(method, ...params){
    return (req, res, next) => method( req, res, next, ...params );
  }

  /**
   * @param {string|RegExp} path
   * @param {Function[]} handlers
   */
  get(path, ...handlers){
    return this.router.get(path, ...handlers);
  }

  /**
   * @param {string|RegExp} path
   * @param {Function[]} handlers
   */
  put(path, ...handlers){
    return this.router.put(path, ...handlers);
  }

  /**
   * @param {string|RegExp} path
   * @param {Function[]} handlers
   */
  post(path, ...handlers){
    return this.router.post(path, ...handlers);
  }

  /**
   * @param {string|RegExp} path
   * @param {Function[]} handlers
   */
  patch(path, ...handlers){
    return this.router.patch(path, ...handlers);
  }

  /**
   * @param {string|RegExp} path
   * @param {Function[]} handlers
   */
  delete(path, ...handlers){
    return this.router.delete(path, ...handlers);
  }

  /**
   * @param {string|RegExp} path
   * @param {Function[]} handlers
   */
  options(path, ...handlers){
    return this.router.options(path, ...handlers);
  }

  /**
   * @param {string|RegExp} path
   * @param {Function[]} handlers
   */
  use(path, ...handlers){
    return this.router.use(path, ...handlers);
  }
}

module.exports = {
  Controller
};