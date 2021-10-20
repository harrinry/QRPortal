const express = require('express');
const { main } = require('../routes/routes');
const Determinator = require('./determinator');

let determinatorRouter = express.Router();

determinatorRouter.get(main, (req, res) => {
  const query = req.query;
  res.json( Determinator( query ) );
});

module.exports = determinatorRouter;