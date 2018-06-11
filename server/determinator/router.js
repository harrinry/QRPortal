const express = require('express');
const { route } = require('./constants');
const Determinator = require('./determinator');

let determinatorRouter = express.Router();

determinatorRouter.get(route, (req, res) => {
  const query = req.query;
  res.json( Determinator( query ) );
});

module.exports = determinatorRouter;