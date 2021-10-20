const routeConfigurations = require('./routes');
const fString = require('../lib/dataConstruct/fString');

function initiateRouters( expressApp ){
  const len = routeConfigurations.length;
  const routerPath = new fString('../{0}/{1}');

  for (let i = 0; i < len; i++) {
    const config = routeConfigurations[i];
    const ROUTER = require( routerPath.print(config.name, config.router ) );
    expressApp.use(config.route, ROUTER);
  }
}

module.exports = initiateRouters;