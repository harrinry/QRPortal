const fs = require('fs');
const root = require('app-root-path');

const filterDeprecated = ( req, res, errorHandler, echo ) => {
  const fileName = root.resolve('rest/' + (echo ? 'Echo/' : 'AIP/') + req.path + '/quality-rules.json');
  fs.readFile( fileName, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    const json = JSON.parse(data),
      clean = json.filter( e => e.status !== 'deprecated');
    res.send(clean);
  });
};

module.exports = filterDeprecated;