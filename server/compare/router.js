const express = require('express');
const root = require('app-root-path');
const { compareOnId } = require('./lib/compare');
const logger = require('../logger/compare');
const fs = require('fs');
let compareRouter = express.Router();

compareRouter.get('/extensions/:extID/:ver1/:ver2', (req, res) => {
  const params = {
      extID: req.params.extID,
      version1: req.params.ver1,
      version2: req.params.ver2,
      section: 'EXTENSIONS',
      isValid: null
    },
    verPath = ( version ) => root.resolve(`rest/AIP/extensions/${params.extID}/versions/${version}/quality-rules.json`),
    toVerify = [ `rest/AIP/extensions/${params.extID}/`, `rest/AIP/extensions/${params.extID}/versions/${params.version1}/`, `rest/AIP/extensions/${params.extID}/versions/${params.version2}/` ];

  if( params.extID !== 'com.castsoftware.aip' ){
    for (let i = 0; i < 3; i++) {
      const eToVerify = toVerify[i];
      params.isValid = fs.existsSync( eToVerify );
  
      if( !params.isValid ) break;
      
    }
    
    logger.info(params);

    if( params.isValid ) res.json(compareOnId( require(verPath(params.version1)), require(verPath(params.version2)), params.version1, params.version2 ));
    else res.sendStatus(404);
  } else {
    const AIPPath = ( version ) => root.resolve(`rest/AIP/versions/${version}/quality-rules.json`);
    res.json(compareOnId( require(AIPPath(params.version1)), require(AIPPath(params.version2)), params.version1, params.version2 ));
  }
});

module.exports = compareRouter;