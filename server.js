var express = require('express');
var app = express();
var serverPort = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private Route Hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' on ' + Date().toString() + '!');
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us')
})

app.use(express.static(__dirname + '/public'));

app.listen(serverPort, function () {
	console.log('Express server has booted successfully on ' + serverPort + '!');
});