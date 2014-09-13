var PeerServer = require('peer').PeerServer;
var server = new PeerServer({port: 9000, path: '/peer-server'});

// Not currently implemented, but we could do something here if we wanted to
server.on('connection', function(id) {

});

server.on('disconnect', function(id) {

});