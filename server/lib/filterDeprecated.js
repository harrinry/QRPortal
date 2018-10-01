const fs = require('fs');
const root = require('app-root-path');

const filterDeprecated = ( req, res, errorHandler ) => {
  fs.readFile( root.resolve('rest/AIP/' + req.url + '/quality-rules.json'), (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    const json = JSON.parse(data),
      clean = json.filter( e => e.status !== 'deprecated');
    res.send(clean);
  });
};

module.exports = filterDeprecated;