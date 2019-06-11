const express = require('express');
const { searchRoute } = require('../routes/routes');
const searchIndex = require('./qr_searchParser');
const logger = require('../logger/search');
let searchRouter = express.Router();

let liteDataMapping;
try{
  liteDataMapping = require('../../rest/AIP/quality-standards/AIP/items/AIP-CAST-LITE/quality-rules.json');
} catch ( err ){
  liteDataMapping = [];
  console.log('aip-lite mapping not found');
}

let liteFilter = require('./cast-lite-filter')(liteDataMapping);

searchRouter.get(searchRoute, (req, res) => {
  const searchParams = {
    query: req.query.q,
    index: req.params.filter
  };
  const ret = searchIndex( searchParams.query, searchParams.index );
  logger.info(searchParams);
  res.json(ret);
});

searchRouter.post('/filter-lite', (req, res) => {
  const results = liteFilter(req.body);
  res.status(200).json(
    results
  );
});

module.exports = searchRouter;