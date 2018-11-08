const express = require('express');
const errHandler = require('../middleware/errorHandler');
const root = require('app-root-path');

let downloadRouter = express.Router({caseSensitive: false});

downloadRouter.post('/:extension/:fileName', (req, res) => {
  const fileName = req.params.fileName + '.' + req.params.extension;
  res.set({
    'Content-Type': 'text/csv',
    'Content-Disposition': 'attachment; filename=' + fileName
  });
  res.attachment(fileName);

  res.download(root.resolve('downloads/' + fileName ), (err) => errHandler(err, res));
});

module.exports = downloadRouter;