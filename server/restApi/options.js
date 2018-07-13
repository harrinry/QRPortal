const path = require('path');
const { restDir } = require('../routes/paths');

module.exports = {
  root: path.join( ...restDir ),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};