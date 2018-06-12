const express = require('express');
const { mainRoute } = require('../lib/constants');
const Determinator = require('./determinator');

let determinatorRouter = express.Router();

determinatorRouter.get(mainRoute, (req, res) => {
  const query = req.query;
  res.json( Determinator( query ) );
});

module.exports = determinatorRouter;