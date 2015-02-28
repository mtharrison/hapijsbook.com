var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 4000 });

server.register([{
    register: require('./web')
}], function (err) {

    if (err) {
        throw err;
    }

    server.start();
});