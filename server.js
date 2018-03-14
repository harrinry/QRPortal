var express = require('express');
var path = require('path');

var port = process.env.PORT || 8080;

var app = express();
app.use(express.static('QRPortal'));
app.use(express.static('static'));


app.get('/default.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/default.html'));
});

app.get('/', function(req, res) {
 +    res.sendFile(path.join(__dirname + '/QRPortal/root.json'));
});

app.listen(port, function() {

	console.log("Listening..."+port);	
	
});
