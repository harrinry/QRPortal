const express = require('express');
const root = require('app-root-path');
const { compareOnId } = require('./lib/compare');
const logger = require('../logger/compare');
let compareRouter = express.Router();

compareRouter.get('/extensions/:extID/:ver1/:ver2', (req, res) => {
  const params = {
      extID: req.params.extID,
      version1: req.params.ver1,
      version2: req.params.ver2,
      section: 'EXTENSIONS'
    },
    verPath = ( version ) => root.resolve(`rest/aip/extensions/${params.extID}/versions/${version}/quality-rules.json`);
  
  logger.info(params);

  res.json(compareOnId( require(verPath(params.version1)), require(verPath(params.version2)), params.version1, params.version2 ));

});

module.exports = compareRouter;