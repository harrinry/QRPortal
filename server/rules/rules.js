const express = require('express');
const options = require('./options');
let rulesRouter = express.Router();

// ---------------------- React Front End Routes ------------------------------ //

rulesRouter.get('/', (req, res) => {
  res.sendFile('index.html', options, (err)=>{
    if ( err ) {
      console.log( err ); // replace with error logger
      res.status(500).send({error: 'a problem occured'});
    }
  });
});

rulesRouter.get('/QRPortal.js', (req, res)=> {
  res.sendFile('QRPortal.js', options, (err)=>{
    if ( err ) {
      console.log( err ); // replace with error logger
      res.status(500).send({error: 'a problem occured'});
    }
  });
});

rulesRouter.get('/QRPortal.js.map', (req, res)=> {
  res.sendFile('QRPortal.js.map', options, (err)=>{
    if ( err ) {
      console.log( err ); // replace with error logger
      res.status(500).send({error: 'a problem occured'});
    }
  });
});

rulesRouter.get('/style.css', (req, res)=> {
  res.sendFile('src/css/style.css', options, (err)=>{
    if ( err ) {
      console.log( err ); // replace with error logger
      res.status(500).send({error: 'a problem occured'});
    }
  });
});

module.exports = rulesRouter;