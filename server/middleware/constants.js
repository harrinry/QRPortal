const path = require('path');

module.exports = {
  poweredByHeader: 'x-powered-by',
  staticRoutes: {
    static: {
      name: 'static',
      dir: 'static',
      url: '/default.html',
      PATH: path.resolve(__dirname, '..', '..', 'static')
    }
  }
};

