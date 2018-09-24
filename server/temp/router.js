const express = require('express');
const options = require('./options');
const { main } = require('../routes/routes');
// const fs = require('fs');
// const path = require('path');
let tempRouter = express.Router();

tempRouter.get(main, (req, res) => {
  const template = require('./template');
  const query = JSON.stringify(req.query);
  const base = 'base64';
  const queryCrypt = Buffer.from(query).toString(base);
  res.type('html'); 
  res.send(template(queryCrypt));
});

tempRouter.get('/querytest', (req, res) => {
  const queryParams = req.query;
  console.log(queryParams);

  res.sendStatus(200);
});

tempRouter.get('/bundle.js', (req, res)=> {
  res.sendFile('bundle.js', options, (err)=>{
    if ( err ) {
      console.log( err ); // replace with error logger
      res.status(500).send({error: 'a problem occured'});
    }
  });
});

tempRouter.get('/bundle.js.map', (req, res)=> {
  res.sendFile('bundle.js.map', options, (err)=>{
    if ( err ) {
      console.log( err ); // replace with error logger
      res.status(500).send({error: 'a problem occured'});
    }
  });
});

module.exports = tempRouter;