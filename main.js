var express = require('express');
// const serverless = require('serverless-http');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

    app.use(express.static('public'));

    app.get('', function(req,res){

    res.status(200).send('Hola Mundo');
    })


    io.on('connection', function(socket) {
        console.log('Someone is connected');
        
        //receives the 'new-message' and its contents. Use a function to print contents to console.
        socket.on('new-message', function(data) {
            console.log(data);
    
        //this sends the contents of message back to frontend
     io.emit('new-message', data);

          });
        });

        server.listen(80, function() {
            console.log("Server running and hello world");
        });
    