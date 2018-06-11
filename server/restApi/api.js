const express = require('express');
const { apiRoute } = require('./routes');
const options = require('./options');
const errHandler = require('../middleware/errorHandler');

let apiRouter = express.Router();

apiRouter.get(apiRoute, ( req, res ) => {
  res.sendFile(req.url, options, (err) => errHandler(err, res));
});

module.exports = apiRouter;