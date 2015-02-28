var Path = require('path');

module.exports = [{
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        
        reply.view('index', {
            title: 'The Title'
        });
    }
}, {
    method: 'GET',
    path: '/{p*}',
    handler: {
        directory: {
            path: Path.join(__dirname, 'public-dst')
        }
    }
}];