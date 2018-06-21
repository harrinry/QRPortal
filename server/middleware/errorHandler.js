const logger = require('../logger/error');

module.exports = function errorHandler( err, res, next ){
  if ( err ) {
    switch (err.statusCode) {
    case 404:
      logger.error( err ); 
      res.status(err.statusCode).send('Not Found');
      break;
    case 500:
      logger.error( err ); 
      res.status(err.statusCode).send('Internal Server Error');
      break;
    }
  } else {
    if( next ) next();
  }
};