const express = require('express');
const { apiRoute, multiUrlRoute } = require('./routes');
const options = require('./options');
const errHandler = require('../middleware/errorHandler');
const concatQueries = require('./concatQueries');

let apiRouter = express.Router();

// potentionally obsolete
apiRouter.get(multiUrlRoute, (req, res)=>{
  const urls = req.query.u || [];
  const ret = concatQueries( ...urls );
  res.json(ret);
});

apiRouter.get(apiRoute, ( req, res ) => {
  const parsedURL = req.url.split(/\+/g);
  
  if (parsedURL.length !== 1) {
    const ret = concatQueries( ...parsedURL );
    res.json(ret);
  } else {
    res.sendFile(req.url, options, (err) => errHandler(err, res));
  }

});

module.exports = apiRouter;