var Path = require('path');

exports.register = function (server, options, next) {

	server.views({
	    engines: {
	        hbs: require('handlebars')
	    },
	    path: Path.join(__dirname, 'views')
	});

    server.route(require('./routes'));
    
    next();
};

exports.register.attributes = {
    name: 'web'
};