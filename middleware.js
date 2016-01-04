//use module exports to expose middleware

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

module.exports = middleware;