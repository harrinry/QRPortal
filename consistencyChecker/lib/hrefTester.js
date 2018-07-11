const fs = require('fs');
const root = require('app-root-path');

const testHref = (path) => {
  const PATH = root.resolve('rest/'+path+'.json');
  return fs.existsSync(PATH);
};

module.exports = testHref;