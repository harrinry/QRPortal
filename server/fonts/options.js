const path = require('path');

module.exports = {
  root: path.join( __dirname, 'fonts' ),
  dotfiles: 'allow',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};