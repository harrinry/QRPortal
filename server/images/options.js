const path = require('path');
const { imgDir } = require('./constants');

module.exports = {
  root: path.join( __dirname, imgDir ),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};