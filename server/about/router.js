const express = require('express');
const fs = require('fs');
const path = require('path');
const readJsonFile = require('../lib/readFile');
const { infoDir, packagePath, route } = require('./constants');

let aboutRouter = express.Router();

aboutRouter.get(route, (req,res)=>{
  fs.readFile( path.resolve(...infoDir, 'LICENSE'), 'utf8', ( err, fileContents ) => {
    if ( err ) {
      console.log( err );
      res.status(500).send({error: 'a problem occured'});
    }
    readJsonFile(path.resolve(...packagePath), (fileName, jsonData ) =>{
      res.json({
        licence: fileContents, 
        version: jsonData.version, 
        news: require('../info/changelog.json')[jsonData.version]
      });
    }, undefined, (e) => {
      console.log( e );
      res.status(500).send({error: 'a problem occured'});
    });
  });
});

module.exports = aboutRouter;