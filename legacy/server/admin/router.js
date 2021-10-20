const express = require('express');
const { download } = require('../routes/routes');
const errHandler = require('../middleware/errorHandler');
const rootPath = require('app-root-path');
const logsPath = rootPath.resolve('logs');
const logPackager = require('./downloader');

let adminRouter = express.Router();

adminRouter.use( require('./auth') );

adminRouter.get(download, (req, res) => {
  const fileName = req.params.filename;
  switch (fileName) {
  case '*':
    logPackager( res );
    break;
  case 'errors':
    logPackager( res, ['404errors.log', 'errors.log'] );
    break;
  case 'stats':
    logPackager( res, ['restStatistics.log', 'determinator.log', 'search.log'] );
    break;
  case 'determinator':
  case 'search':
  case 'restStatistics':
    res.download(logsPath.toString() + '/' + fileName + '.log', (err) => errHandler(err, res));
    break;
  default:
    res.sendStatus(404);
    break;
  }
});

module.exports = adminRouter;