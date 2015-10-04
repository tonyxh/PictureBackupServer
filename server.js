var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer');

//app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({
	dest:'./pictures',
	rename: function(fieldname){
		return fieldname;
	}
}));




app.get('/index.html', function(req, res){
	res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/build/bundle.js', function(req, res){
	res.sendFile(__dirname + '/' + 'build/bundle.js');
});

app.post('/upload', function(req, res){
	console.log(req);
	res.send("Hello");
});

var server = app.listen(8081, '0.0.0.0', function(){
	var host = server.address().address
  	var port = server.address().port

  	console.log("Example app listening at http://%s:%s", host, port)
});