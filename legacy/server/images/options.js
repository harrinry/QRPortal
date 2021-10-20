const path = require('path');

module.exports = {
  root: path.join( __dirname, 'img' ),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};