const express = require('express');
const { route } = require('./constants');

let searchRouter = express.Router();

/*searchRouter.get(route, (req, res) => {
  const ret = searchIndex( req.params.keyword, req.params.filter );
  res.json(ret);
});*/

module.exports = searchRouter;