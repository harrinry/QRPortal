const path = require('path');
const { mktPath } = require('../routes/paths');

module.exports = {
  root: path.join( ...mktPath ),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};