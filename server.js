const express = require('express');
const path = require('path');
const UNIQ = require('./serverModules/uniq');
const fs = require('fs');
const readJsonFile = require('./serverModules/readFile');
const technoMapping = require('./serverModules/technologies-map');
/*
// google analytics back-end
const got = require('got');
const GA_TRACKING_ID = process.env.GA_TRACKING_ID || 'UA-119529646-1';
*/
// cors
const cors = require('cors');

// helmet handle request security
const helmet = require('helmet');

const searchIndex = require('./serverModules/qr_searchParser');

// rest dir base 
const restDir = path.basename('./rest/');

var port = process.env.PORT || 8080;

var app = express();
// security startup
app.use( helmet() );
app.disable('x-powered-by');

// cross domain access GLOBAL ACCESS ONLY
app.use(cors({
  withCredentials: true
}));

//app.use(express.static('QRPortal'));
app.use(express.static('static'));

/*app.get('/qrportal/extensions/', function(req, res) {
	
  console.log('index>'+req.url);
	
  var urlfull = req.url;
	
  res.sendFile(path.join(__dirname + urlfull/*.replace('.html','')));
//    res.sendFile(path.join(__dirname + req.url));
});*/

// ---------------------- React Front End Routes ------------------------------ //

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/qrp_WebApp/index.html'));
});

app.get('/googleda2a1d9b51c2edfd.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/qrp_WebApp/googleda2a1d9b51c2edfd.html'));
});

app.get('/QRPortal.js', (req, res)=> {
  res.sendFile(path.join(__dirname, '/qrp_WebApp/QRPortal.js'));
});

app.get('/QRPortal.js.map', (req, res)=> {
  res.sendFile(path.join(__dirname, '/qrp_WebApp/QRPortal.js.map'));
});

app.get('/style.css', (req, res)=> {
  res.sendFile(path.join(__dirname, '/qrp_WebApp/src/css/style.css'));
});

app.get('/favicon.ico', (req, res)=> {
  res.sendFile(path.join(__dirname, '/qrp_WebApp/favicon/favicon32.png'));
});

app.get('/img/*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/qrp_WebApp' + req.url));
});

app.get('/technologies.json', (req, res) => {
  const query = req.query;
  switch (query.env) {
  case 'webapp':
    res.json( technoMapping );
    break;
  default:
    res.sendFile(path.join(__dirname, restDir, req.url));
    break;
  }
});

app.get('/extensions.json', (req, res) => {
  const query = req.query;
  switch (query.env) {
  case 'webapp':
    res.json( require('./rest/AIP/extensions.json').filter( e => e.qualityModel === true ) );
    break;
  default:
    res.sendFile(path.join(__dirname, restDir, req.url));
    break;
  }
});

app.get('/mlturl/*', (req, res)=>{
  const q = req.query;
  let r = undefined;
  if( q.hasOwnProperty('u') ){
    const arr = q.u.map( u => require( path.join( __dirname, restDir, u, "quality-rules")));
    r = [].concat(...arr);
  }
  const uniqArr = q.hasOwnProperty('f') ? UNIQ(r, val => val[q.f] ) : UNIQ(r, val => val.id );
  res.json(uniqArr);
});

app.get('/search', (req, res)=>{
  const q = req.query;
  const r = searchIndex( q.s, q.f );
  res.json(r);
});

app.get('/about', (req,res)=>{
  fs.readFile( './LICENSE', 'utf8', ( err, fileContents ) => {
    if ( err ) {
      console.log( err );
      res.status(500).send({error: 'a problem occured'});
    }
    readJsonFile( 'package.json', (fileName, jsonData ) =>{
      res.json({licence: fileContents, version: jsonData.version});
    }, undefined, (e) => {
      console.log( e );
      res.status(500).send({error: 'a problem occured'});
    });
  });
});

// ------------------------ End of React Routes ------------------------------ //

// ----------------------------- Global API routes ---------------------------- //

// URLs temporary rewriting from old to new API version
// React application SHOULD not use any more these URLs

app.get("/business-criteria.json",  function (req, res) { res.sendFile(path.join(__dirname, restDir, "/AIP/business-criteria.json")); });
app.get("/AIP/business-criteria/:bcid",  function (req, res) { res.sendFile(path.join(__dirname, restDir, (req.url + "/quality-rules.json")));});

app.get("/quality-standards.json", function (req, res) { res.sendFile(path.join(__dirname, restDir, "/AIP/quality-standards.json")); });
app.get("/AIP/quality-standards/:std", function (req, res) { res.sendFile(path.join(__dirname, restDir, (req.url + "/categories.json")));});
app.get("/AIP/quality-standards/:std/categories/:cat", function (req, res) { res.sendFile(path.join(__dirname, restDir, (req.url + "/items.json")));});
app.get("/AIP/quality-standards/:std/items/:cat", function (req, res) { res.sendFile(path.join(__dirname, restDir, (req.url + "/quality-rules.json")));});

app.get("/AIP/extensions/:ext", function (req, res) { res.sendFile(path.join(__dirname, restDir, (req.url + "/versions.json")));});
app.get("/AIP/extensions/:ext/versions/:ver", function (req, res) { res.sendFile(path.join(__dirname, restDir, (req.url + "/quality-rules.json")));});

app.get("/AIP/technologies/:techno", function (req, res) { res.sendFile(path.join(__dirname, restDir, (req.url + "/quality-rules.json")));});
app.get("AIP/technologies/:techno", function (req, res) { res.sendFile(path.join(__dirname, restDir, (req.url + "/quality-rules.json")));});
app.get("technologies/:techno", function (req, res) { res.sendFile(path.join(__dirname, restDir, (req.url + "/quality-rules.json")));});

app.get("/CAST_AIP.json", function (req, res) { res.sendFile(path.join(__dirname, restDir, "/AIP/versions.json")); });
app.get("/AIP/versions/:ver", function (req, res) { res.sendFile(path.join(__dirname, restDir, (req.url + "/quality-rules.json")));});

// New API routes
app.get("/AIP",  function (req, res) { res.sendFile(path.join(__dirname, restDir, "AIP.json")); });
app.get("/AIP/*",  function (req, res) { res.sendFile(path.join(__dirname, restDir, (req.url + ".json"))); });

// ---------------------------------------------------------------------------- //

// swagger-ui
app.use('/swagger-ui', express.static('swagger-ui'));
app.use(function(req, res, next) {
    res.header('access-control-allow-origin', '*');
    next();
});

// Backdoor REST API browser
app.get('/default.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/static/'));
});

app.listen(port, function() {
  console.log('Listening...'+port);	
});
