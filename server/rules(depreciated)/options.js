const path = require('path');
const { webappDir } = require('../routes/paths');

module.exports = {
  root: path.resolve( ...webappDir ),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};