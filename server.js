var express = require('express');
var app = express();
var serverPort = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('<h1>About Us</h1>')
})

app.use(express.static(__dirname + '/public'));

app.listen(serverPort, function () {
	console.log('Express server has booted successfully on ' + serverPort + '!');
});