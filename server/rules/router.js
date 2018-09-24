const express = require('express');
const options = require('./options');
const { main } = require('../routes/routes');
const template = require('./template');
const logger = require('../logger/rules');
let Router = express.Router();

Router.get(main, (req, res) => {
  const keys = Object.keys(req.query);
  for (let i = 0; i < keys.length; i++) {
    const ref = req.query[keys[i]];
    console.log(ref.split('_'));
  }
  res.type('html'); 
  res.send(template(''));
});

Router.get('/querytest', (req, res) => {
  const queryParams = req.query;
  console.log(queryParams);

  res.sendStatus(200);
});

Router.get('/bundle.js', (req, res)=> {
  res.sendFile('bundle.js', options, (err)=>{
    if ( err ) {
      logger.error( err );
      res.status(500).send({error: 'a problem occured'});
    }
  });
});

// Router.get('/bundle.js.map', (req, res)=> { // remove for production use
//   res.sendFile('bundle.js.map', options, (err)=>{
//     if ( err ) {
//       console.log( err ); // replace with error logger
//       res.status(500).send({error: 'a problem occured'});
//     }
//   });
// });

module.exports = Router;