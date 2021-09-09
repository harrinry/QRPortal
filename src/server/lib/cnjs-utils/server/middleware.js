

/**
 * middleware wrapper to fire only on truthy conditions
 * @param {boolean} condition 
 */
function maybe(condition){
  return (middleware) => {
    return (req, res, next) => {
      if (
        (typeof condition === "boolean" && condition) ||
        (typeof condition === "function" && condition(req, res, next))
      ) {
        return middleware(req, res, next);
      }
      next();
    };
  };
}

/**
 * @param {Function} cb 
 * @param {Express.Response} res 
 * @param {Function} next 
 */
function handlerFactory( cb, res, next ){
  return ( err ) => cb( err, res, next);
}

/**
 * @param {Function} cb 
 * @param {Express.Response} res 
 * @param {Function} next 
 */
function handleEnoentErrors( err, res, next ){
  if (err && !res.headersSent) {
    return res.sendStatus(404);
  }

  if( next ) return next();
}

/**
 * @param {Express.Response} res 
 * @param {Function} next 
 */
function enoentHandler( res, next ){
  return handlerFactory( handleEnoentErrors, res, next );
}

module.exports = {
  maybe,
  handlerFactory,
  enoentHandler
};