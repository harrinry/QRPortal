const express = require('express');
const options = require('./options');
const { main } = require('../routes/routes');
const technoMapping = require('../lib/technologies-map');
const extensions = require('../../rest/extensions.json').filter( e => e.qualityModel === true );
let tempRouter = express.Router();

tempRouter.get(main, (req, res) => {
  res.sendFile('index.html', options, (err)=>{
    if ( err ) {
      console.log( err ); // replace with error logger
      res.status(500).send({error: 'a problem occured'});
    }
  });
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

/*tempRouter.get('/style.css', (req, res)=> {
  res.sendFile('src/css/style.css', options, (err)=>{
    if ( err ) {
      console.log( err ); // replace with error logger
      res.status(500).send({error: 'a problem occured'});
    }
  });
});*/

tempRouter.get('/technologies.json', (req, res) => {
  res.json( technoMapping );
});

tempRouter.get('/extensions.json', (req, res) => {
  res.json( extensions );
});

module.exports = tempRouter;