const path = require('path');
const { publicPath } = require('../routes/paths');

module.exports = {
  root: path.resolve( ...publicPath ),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};