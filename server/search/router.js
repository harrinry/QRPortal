const express = require('express');
const { searchRoute } = require('../routes/routes');
const searchIndex = require('./qr_searchParser');
let searchRouter = express.Router();

searchRouter.get(searchRoute, (req, res) => {
  const ret = searchIndex( req.query.q, req.params.filter );
  res.json(ret);
});

module.exports = searchRouter;