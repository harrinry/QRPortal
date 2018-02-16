var express = require('express');
var path = require('path');
//var static = require('node-static');

var port = process.env.PORT || 8080;

var app = express();
//app.use(express.static('QRPortal'));
app.use(express.static('static'));


/*var file = new static.Server('./extensions');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(port);*/

/*app.get('/default.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/default.html'));
});*/
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/root.json'));
});

app.get('/js/*', function(req, res) {
	
	console.log("index>"+req.url);
	
	var urlfull = req.url;
	
   res.sendFile(path.join(__dirname + urlfull/*.replace('.html','')*/));
//    res.sendFile(path.join(__dirname + req.url));
});

app.get('/css/*', function(req, res) {
	
	console.log("index>"+req.url);
	
	var urlfull = req.url;
	
   res.sendFile(path.join(__dirname + urlfull/*.replace('.html','')*/));
//    res.sendFile(path.join(__dirname + req.url));
});

app.get('/extensions/*/*', function(req, res) {
	
	console.log("index>"+req.url);
	
	var urlfull = req.url;
	
   res.sendFile(path.join(__dirname + urlfull/*.replace('.html','')*/));
//    res.sendFile(path.join(__dirname + req.url));
});

app.get('/*/*.json', function(req, res) {
		
    res.sendFile(path.join(__dirname + req.url));
});

app.get('/*/*/*.json', function(req, res) {
		
    res.sendFile(path.join(__dirname + req.url));
});

app.listen(port, function() {

	console.log("Listening..."+port);	
	
});
