const express = require('express');
const { main } = require('../routes/routes');
const cve = require('./cvetracker');

let cveTracker = express.Router();

cveTracker.post(main, (req, res) => {
  const { ids, id } = req.body;
  res.status(200).json( cve( id || ids ) );
});

module.exports = cveTracker;