const path = require('path');
const { restDir } = require('./routes');

module.exports = {
  root: path.join( ...restDir ),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};