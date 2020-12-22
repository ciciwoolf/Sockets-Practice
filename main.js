var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

    app.use(express.static('public'));

    app.get('/', function(req,res){

    res.status(200).send('Hola Mundo');
    })


    io.on('connection', function(socket) {
        console.log('Someone is connected');
        
        socket.on('new-message', function(data) {
            console.log(data);
            
            io.emit('new-message', data); //this sends back to frontend

          });
        });

server.listen(8083, function() {
    console.log("Server running and hello world");
})