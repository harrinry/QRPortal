const path = require('path');

module.exports = {
  queryKey: 'q',
  extPath: path.resolve(__dirname, '..' , '..', 'rest', 'extensions'),
  versionTypes:{
    LTS: 'LTS',
    FUNCREL: 'FUNCREL',
    ALPHA: 'ALPHA',
    BETA: 'BETA'
  },
  route: '/'
};