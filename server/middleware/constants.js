const path = require('path');

module.exports = {
  poweredByHeader: 'x-powered-by',
  staticRoutes: [
    {
      name: 'static',
      dir: 'static',
      use: false,
      url: 'default.html',
      PATH: path.resolve(__dirname, '..', '..', 'static')
    },
    {
      name: 'swagger-ui',
      use: true,
      url: '/swagger-ui/',
      PATH: path.resolve(__dirname, '..', '..', 'swagger-ui')
    }
  ]
};