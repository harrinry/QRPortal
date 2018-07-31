const path = require('path');

module.exports = {
  poweredByHeader: 'x-powered-by',
  staticRoutes: [
    {
      name: 'static',
      dir: 'static',
      url: '/default.html',
      PATH: path.resolve(__dirname, '..', '..', 'static')
    },
    {
      name: 'swagger-ui',
      dir: 'swagger-ui',
      url: '/swagger.html',
      PATH: path.resolve(__dirname, '..', '..', 'swagger-ui')
    }
  ]
};