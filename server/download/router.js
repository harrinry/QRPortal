const express = require('express');
const errHandler = require('../middleware/errorHandler');
const root = require('app-root-path');

let downloadRouter = express.Router({caseSensitive: false});

downloadRouter.post('/:extension/:fileName', (req, res) => {
  res.set('content-type', 'text/csv');

  res.download(root.resolve('downloads/' + req.params.fileName + '.' + req.params.extension ), (err) => errHandler(err, res));
});

module.exports = downloadRouter;