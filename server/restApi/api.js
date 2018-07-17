const express = require('express');
const { mainWild } = require('../routes/routes');
const options = require('./options');
const errHandler = require('../middleware/errorHandler');
const concatQueries = require('./concatQueries');
const QueryParser = require('../lib/queryParser');
const StatLogger = require('../logger/restStats');
const normalize = require('../lib/normalize');

let apiRouter = express.Router();

apiRouter.get(mainWild, ( req, res ) => {
  if (req.query.length > 0) {
    const queryKey = 'q', query = QueryParser(req.query, queryKey);
    StatLogger( query );
    concatQueries( ( ret )=> res.json(ret), (err) => errHandler(err, res), ...query );
  } else {
    StatLogger.info( req.url );
    res.sendFile(normalize(req.url), options, (err) => errHandler(err, res));
  }
});

module.exports = apiRouter;