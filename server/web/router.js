const express = require('express');
const options = require('./options');
const technoMapping = require('../lib/technologies-map');
const errorHandler = require('../middleware/errorHandler');
const extensionsMap = require('../lib/extensions-map');
const getStandardsMap = require('../lib/standards-map');
const businessCriteriaMap = require('../lib/business-criteria-map');
const navigationData = require('../lib/navigation-map');
const fs = require('fs');
const root = require('app-root-path');
const filterDeprecated = require('../lib/filterDeprecated');
let extVersionMap;

// extensionsMap.INIT();

let WebRouter = express.Router();

WebRouter.get('/technologies', (req, res) => {
  res.json( technoMapping );
});

WebRouter.get('/technologies/:technoID', (req, res) => {
  filterDeprecated(req, res, errorHandler);
  // res.sendFile(req.url + '/quality-rules.json', options, (err) => errorHandler(err, res));
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
  filterDeprecated(req, res, errorHandler);
});

WebRouter.get('/quality-standards', ( req, res ) => {
  getStandardsMap(res);
});

WebRouter.get('/quality-standards/:stdID/categories', ( req, res ) => {
  fs.readFile( root.resolve('rest/AIP/' + req.url + '.json'), (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    const json = JSON.parse(data),
      jsonMapped = json.map( e => {
        return Object.assign({}, e, {
          icon: ( req.params.stdID.toLowerCase() === 'owasp' ? 
            '/img/' + e.name.toLowerCase() + '.svg' : 
            '/img/' + e.name.substring(req.params.stdID.length).replace(/-/ig,'').toLowerCase() + '.svg' ) 
        });
      });
    res.send(jsonMapped);
  });
});

WebRouter.get('/quality-standards/:stdID/categories/:stdCatName', ( req, res ) => {
  res.sendFile(req.url + '/items.json', options, err => errorHandler(err, res));
});

WebRouter.get('/quality-standards/:stdID/items/:stdTagName', ( req, res ) => {
  // res.sendFile(req.url + '/quality-rules.json', options, err => errorHandler(err, res));
  filterDeprecated(req, res, errorHandler);
});

WebRouter.get('/business-criteria', (req, res) => {
  businessCriteriaMap(res);
});

WebRouter.get('/business-criteria/:bcID', ( req, res ) => {
  filterDeprecated(req, res, errorHandler);
  // res.sendFile(req.url + '/quality-rules.json', options, err => errorHandler(err, res));
});

WebRouter.get('/quality-rules/:ruleID', ( req, res ) => {
  const jsonReg = /.json/i;
  res.sendFile( jsonReg.test(req.url) ? req.url : req.url + '.json', options, err => errorHandler(err, res));
});

WebRouter.get('/versions.json', (req, res) => {
  if ( !extVersionMap ) extVersionMap = extensionsMap.readExtMap();
  res.json( extVersionMap['AIP'] );
});

WebRouter.get('/versions/:aipVersion', (req, res) => {
  filterDeprecated(req, res, errorHandler);
  // res.sendFile(req.url + '/quality-rules.json', options, err => errorHandler(err, res));
});

WebRouter.get('/web-navigation', (req, res) => {
  const navData = navigationData;
  res.json(navData);
});

module.exports = WebRouter;