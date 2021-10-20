const express = require('express');
const path = require('path');
const port = require('./settings/serverConfig').port;
const bodyParser = require('body-parser');
const notFound = require('./middleware/notFound');
const errHandler = require('./middleware/errorHandler');
const ValidateQuery = require('./rules/lib/validateQuery');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./middleware/security')(app);
require('./middleware/staticRoutes')(app);

// ---------------------- Ensure Log directory  ------------------------------ //
require('./settings/ensureLogDir')();

// ---------------------- initiate Routers  ------------------------------ //
require('./settings/routerConfig')(app);

// ---------------------- initiate map to ensure to date state  ------------------------------ //
require('./lib/extensions-map').INIT();

// ---------------------- Google site identification ------------------------------ //
app.get('/googleda2a1d9b51c2edfd.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../qrp_WebApp/googleda2a1d9b51c2edfd.html'));
});

// -------------------------------- Fav ICON -------------------------------------- //
app.get('/favicon.ico', (req, res)=> {
  //if (req.url.includes('rules')) {
  //res.sendFile(path.resolve(__dirname, '..', 'qrp_WebApp', 'favicon', 'favicon32.png'));
  res.sendFile(path.resolve(__dirname, '..', 'public', 'favicon', 'LogoStructuralRules.png'));
});

// ------------------------------- Base redirect ---------------------------------- //

app.get('/', (req, res)=>{
  res.redirect('/rules');
});

app.get('/Echo*', (req, res) => {
  const url = req.originalUrl.replace('/Echo/', '/AIP/');
  res.redirect( url );
});

app.get('/bestpractices', (req, res) => {
  const queryValid = ValidateQuery(req.query);
  if(queryValid) {
    res.sendFile(path.resolve(__dirname, '..', 'public','index.html'), (err) => errHandler(err, res));
  } else {
    notFound(req, res);
  }
});

app.use(require('./middleware/notFound'));

// --------------------------- Start Server ---------------------------//
app.listen(port, function() {
  console.log('Listening...' + port);	
});