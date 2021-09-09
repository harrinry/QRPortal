
// ------------------------- Routing -----------------------------------

function Get( path ){
  return helperForRoutes("get", path);
}

function Put( path ){
  return helperForRoutes("put", path);
}

function Post( path ){
  return helperForRoutes("post", path);
}

function Patch( path ){
  return helperForRoutes("patch", path);
}

function Delete( path ){
  return helperForRoutes("delete", path);
}

function Options( path ){
  return helperForRoutes("options", path);
}

// ----------------------- Middleware -----------------------------------

function Middleware( ...middleware ) {

  return ( target, propertyKey, descriptor ) => {
    let routeProperties = Reflect.getOwnMetadata(propertyKey, target);
    if (!routeProperties) {
        routeProperties = {};
    }

    if( routeProperties.middleware ){
      middleware = [ ...routeProperties.middleware, ...middleware.reverse() ];
      delete routeProperties.middleware;
    }

    routeProperties = {
        middleware,
        ...routeProperties,
    };

    Reflect.defineMetadata(propertyKey, routeProperties, target);

    if (descriptor) {
      return descriptor;
    }
  };
}


// ----------------------- Helpers --------------------------------------

function helperForRoutes( httpVerb, path ){

  return ( target, propertyKey, descriptor ) => {
    let routeProperties = Reflect.getOwnMetadata(propertyKey, target);
    if (!routeProperties) {
        routeProperties = {};
    }
    routeProperties = {
        httpVerb,
        path: normalizePath( path ),
        ...routeProperties,
    };

    Reflect.defineMetadata(propertyKey, routeProperties, target);

    if (descriptor) {
      return descriptor;
    }
  };
}

function normalizePath( path = "" ){
  return !(path instanceof RegExp) && path.charAt(0) !== "/"
    ? `/${path}`
    : path;
}

module.exports = {
  Delete,
  Get,
  Middleware,
  Options,
  Patch,
  Post,
  Put,
};