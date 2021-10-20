const express = require('express');
const { main } = require('../routes/routes');
const options = require('./options');
const errHandler = require('../middleware/errorHandler');

let marketingRouter = express.Router();

marketingRouter.get(main+'css/:fileName', (req, res) => {
  const file = req.params.fileName;
  res.sendFile(file + '.css', options, (err) => errHandler(err, res));
});

marketingRouter.get(main+':nuggetList', (req, res) => {
  const file = req.params.nuggetList;
  res.sendFile(file + '.json', options, (err) => errHandler(err, res));
});

module.exports = marketingRouter;