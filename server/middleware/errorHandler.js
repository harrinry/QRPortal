module.exports = function errorHandler( err, res, next ){
  if ( err ) {
    console.log( err ); // replace with error logger
    res.sendStatus(err.statusCode);
  } else {
    if( next ) next();
  }
};