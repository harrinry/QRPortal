const logger = require('../logger/error');

module.exports = function errorHandler( err, res, next ){
  if ( err ) {
    logger.error( err ); 
    res.sendStatus(err.statusCode);
  } else {
    if( next ) next();
  }
};