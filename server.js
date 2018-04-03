var express = require('express');
var path = require('path');

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static('QRPortal'));
app.use(express.static('static'));

app.get('/qrportal/extensions/*/*', function(req, res) {
	
  console.log('index>'+req.url);
	
  var urlfull = req.url;
	
  res.sendFile(path.join(__dirname + urlfull/*.replace('.html','')*/));
//    res.sendFile(path.join(__dirname + req.url));
});

app.get('/root.json', function(req, res) {
  +    res.sendFile(path.join(__dirname + '/QRPortal/root.json'));
});

// ---------------------- React Front End Routes ------------------------------ //

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/qrp_WebApp/index.html'));
});

app.get('/QRPortal.js', (req, res)=> {
  res.sendFile(path.join(__dirname + '/qrp_WebApp/QRPortal.js'));
});

app.get('/style.css', (req, res)=> {
  res.sendFile(path.join(__dirname + '/qrp_WebApp/src/css/style.css'));
});

// ------------------------ End of React Routes ------------------------------ //

app.get('/default.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/static/'));
});

app.listen(port, function() {

  console.log('Listening...'+port);	
	
});
