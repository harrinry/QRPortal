const express = require('express');
const options = require('./options');
const { main } = require('../routes/routes');
const logger = require('../logger/rules');
const pathGen = require('./lib/pathGenerator');
const notFound = require('../middleware/notFound');
const errHandler = require('../middleware/errorHandler');
let Router = express.Router();



Router.get(main, (req, res) => {
  const keys = Object.keys(req.query);
  let queryValid = true;
  console.log(req.query);
  if( keys.length > 0 ){
    if(keys.indexOf('sec') === -1){
      queryValid = false;
    }

    if( keys.indexOf('s') > -1 ){
      queryValid = true;
    }
  }

  if(queryValid) {
    res.sendFile('index.html', options, (err) => errHandler(err, res));
  } else {
    notFound(req, res);
  }
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