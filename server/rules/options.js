const path = require('path');
const { webappDir } = require('../lib/constants');

module.exports = {
  root: path.resolve( ...webappDir ),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};