const Types = require("./resolution-types");

/**
 * @typedef {import("./resolution")} IOCResolution 
 * @typedef {import("./container")} IOCContainer
 */

/**
 * @param {IOCResolution} resolution 
 * @param {IOCContainer} container 
 */
function resolveDependencies(resolution, container){
  return resolution.dependencies.map(_ => container.get(_));
}

/**
 * @param {IOCResolution} resolution 
 * @param {IOCContainer} container 
 */
function resolve(resolution, container){

  switch (resolution.type) {
    case Types.Constant:
    case Types.Constructor:
      return resolution.invokable;
    case Types.Standard:
      return build(resolution, container);
    case Types.Factory:
      return createFactory(container, resolution.invokable);
    case Types.AutoFactory:
      return createAutoFactory(resolution, container);
    case Types.Singleton:
      return getSingletonInstance(container, resolution);
    default:
      throw new Error("Unknown resolution type");
  }
}

/**
 * @param {IOCResolution} resolution 
 * @param {IOCContainer} container 
 */
function getSingletonInstance(container, resolution){
  if(!resolution.instance){
    resolution.instance = build(resolution, container);
  }

  return resolution.instance;
}

/**
 * @param {IOCResolution} resolution 
 * @param {IOCContainer} container 
 */
function build(resolution, container){
  const deps = resolveDependencies(resolution, container);
  const Ctor = resolution.invokable;
  
  return new Ctor(...deps);
}

/**
 * @param {(context: IOCContainer) => any} fac 
 * @param {IOCContainer} container 
 */
function createFactory(container, fac){
  return () => fac(container);
}

/**
 * @param {IOCResolution} resolution 
 * @param {IOCContainer} container 
 */
function createAutoFactory(resolution, container){
  return createFactory(container, (context) => {
    return build(resolution, context);
  });
}

module.exports = {
  resolve,
  build,
  createFactory,
  createAutoFactory,
  resolveDependencies,
};