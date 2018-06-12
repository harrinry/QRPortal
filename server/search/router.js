const express = require('express');
const { route } = require('./constants');
const searchIndex = require('./qr_searchParser');
let searchRouter = express.Router();

searchRouter.get(route, (req, res) => {
  const ret = searchIndex( req.query.q, req.params.filter );
  res.json(ret);
});

module.exports = searchRouter;