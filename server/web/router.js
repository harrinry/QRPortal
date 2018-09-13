const express = require('express');
const options = require('./options');
const technoMapping = require('../lib/technologies-map');
const errorHandler = require('../middleware/errorHandler');
const extensionsMap = require('../lib/extensions-map');
const getStandardsMap = require('../lib/standards-map');
const businessCriteriaMap = require('../lib/business-criteria-map');
let extVersionMap;

// extensionsMap.INIT();

let WebRouter = express.Router();

WebRouter.get('/technologies', (req, res) => {
  res.json( technoMapping );
});

WebRouter.get('/technologies/:technoID', (req, res) => {
  res.sendFile(req.url + '/quality-rules.json', options, (err) => errorHandler(err, res));
});

WebRouter.get('/extensions', (req, res) => {
  res.json( extensionsMap.extensions );
});

WebRouter.get('/extensions/:extID', ( req, res ) => {
  const key = 'AIP' + req.url;
  if ( !extVersionMap ) extVersionMap = extensionsMap.readExtMap();
  if( extVersionMap.hasOwnProperty( key ) ){
    res.json( extVersionMap[key] );
  } else {
    errorHandler( {query: key, statusCode: 404}, res );
  }
});

WebRouter.get('/extensions/:extID/versions/:version', ( req, res ) => {
  res.sendFile(req.url + '/quality-rules.json', options, err => errorHandler(err, res));
});

WebRouter.get('/quality-standards', ( req, res ) => {
  getStandardsMap(res);
});

WebRouter.get('/quality-standards/:stdID/categories', ( req, res ) => {
  res.sendFile(req.url + '.json', options, err => errorHandler(err, res));
});

WebRouter.get('/quality-standards/:stdID/categories/:stdCatName', ( req, res ) => {
  res.sendFile(req.url + '/items.json', options, err => errorHandler(err, res));
});

WebRouter.get('/quality-standards/:stdID/items/:stdTagName', ( req, res ) => {
  res.sendFile(req.url + '/quality-rules.json', options, err => errorHandler(err, res));
});

WebRouter.get('/business-criteria', (req, res) => {
  businessCriteriaMap(res);
});

WebRouter.get('/business-criteria/:bcID', ( req, res ) => {
  res.sendFile(req.url + '/quality-rules.json', options, err => errorHandler(err, res));
});

WebRouter.get('/quality-rules/:ruleID', ( req, res ) => {
  const jsonReg = /.json/i;
  res.sendFile( jsonReg.test(req.url) ? req.url : req.url + '.json', options, err => errorHandler(err, res));
});

WebRouter.get('/versions.json', (req, res) => {
  res.sendFile(req.url, options, err => errorHandler(err, res));
});

WebRouter.get('/versions/:aipVersion', (req, res) => {
  res.sendFile(req.url + '/quality-rules.json', options, err => errorHandler(err, res));
});

module.exports = WebRouter;