const express = require('express');
const options = require('./options');
const { main } = require('../routes/routes');
const logger = require('../logger/rules');
const HydObj = require('./lib/hydrate');
const ValidateQuery = require('./lib/validateQuery');
const notFound = require('../middleware/notFound');
const errHandler = require('../middleware/errorHandler');
let Router = express.Router();

Router.get(main, (req, res) => {
  const queryValid = ValidateQuery(req.query);
  console.log(queryValid);
  if(queryValid) {
    res.sendFile('index.html', options, (err) => errHandler(err, res));
  } else {
    notFound(req, res);
  }
});

Router.get('/hydrate', (req, res) => {
  res.json(HydObj(req.query));
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