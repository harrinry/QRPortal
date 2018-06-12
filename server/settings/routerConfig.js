const routeConfigurations = require('./routes');
function initiateRouters( expressApp ){
  const len = routeConfigurations.length;

  for (let i = 0; i < len; i++) {
    const config = routeConfigurations[i];
    const ROUTER = require( '../'.concat( config.name, '/', config.router ) );
    expressApp.use(config.route, ROUTER);
  }
}

module.exports = initiateRouters;