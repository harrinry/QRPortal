const express = require('express');
const options = require('./options');
const { main } = require('../routes/routes');
const technoMapping = require('../lib/technologies-map');
const errLogger = require('../logger/error');
const errorHandler = require('../middleware/errorHandler');
const extensionsMap = require('../lib/extensions-map');
const getStandardsMap = require('../lib/standards-map');
let extVersionMap;

let rulesRouter = express.Router();

rulesRouter.get(main, (req, res) => {
  res.sendFile('index.html', options, (err)=>{
    if ( err ) {
      errLogger.error( err );
      res.status(500).send({error: 'a problem occured'});
    }
  });
});

rulesRouter.get('/QRPortal.js', (req, res)=> {
  res.sendFile('QRPortal.js', options, (err)=>{
    if ( err ) {
      errLogger.error( err );
      res.status(500).send({error: 'a problem occured'});
    }
  });
});

rulesRouter.get('/style.css', (req, res)=> {
  res.sendFile('src/css/style.css', options, (err)=>{
    if ( err ) {
      errLogger.error( err );
      res.status(500).send({error: 'a problem occured'});
    }
  });
});

rulesRouter.get('/technologies.json', (req, res) => {
  res.json( technoMapping.aip );
});

rulesRouter.get('/extensions.json', (req, res) => {
  res.json( extensionsMap.extensions );
});

rulesRouter.get('/extensions', ( req, res ) => {
  const hrefKey = req.query.q;
  if ( !extVersionMap ) extVersionMap = extensionsMap.readExtMap();
  if( extVersionMap.hasOwnProperty( hrefKey ) ){
    res.json( extVersionMap[hrefKey] );
  } else {
    errorHandler( {statusCode: 404}, res );
  }
});

rulesRouter.get('/quality-standards', ( req, res ) => {
  getStandardsMap(res);
});

module.exports = rulesRouter;