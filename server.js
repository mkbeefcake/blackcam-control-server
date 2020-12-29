const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

/** Create express & socket server */
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: ["http://localhost:8000", "http://127.0.0.1:8000"],
        methods: ["GET", "POST"]
    }
});
require('dotenv').config();

/** redis admin channel */
/**
var redisPort = process.env.REDIS_PORT;
var redisHost = process.env.REDIS_HOST;
var ioRedis = require('ioredis');
var redis = new ioRedis(redisPort, redisHost);

redis.subscribe('blackcam-control-channel');
redis.on('message', function (channel, message) {
  message  = JSON.parse(message);
  io.emit(channel + ':' + message.event, message.data);
});
 */

/** socket.io connection */
var socketList = {};
io.on('connection', (socket) => {
    console.log('New device is connected : ' + socket.id);

    /** Welcome message to admin */
    socket.emit('echo', 'Thanks for your joined.');
    io.emit('device-added', socket.id, '');

    /** Disconnect handler */
    socket.on('disconnect', () => {
        console.log('Socket is disconnected : ' + socket.id);                
        io.emit('device-removed', socket.id, '');

        delete socketList[socket.id];
        console.log('Socket List = ' + JSON.stringify(socketList));
    }); 

    /** camera device status channel */
    socket.on('status', (status) => {

    });

    /** camera device name */
    socket.on('peername', (peername) => {
        socketList[socket.id] = peername;        
        console.log('Socket List = ' + JSON.stringify(socketList));
    });
    
    /** admin control communication channel */
    socket.on('admin', (socketId, msg) => {
        console.log(msg);
        if (socketId == null) {
            io.emit('camera-control', msg);
        }
        else {
            socket.to(socketId).emit('camera-control', msg);
        }
    });


});


/** listening socket server */
var broadcastPort = process.env.BROADCAST_PORT || 11000;
server.listen(broadcastPort, function () {
  console.log('Listening on *:' + broadcastPort);
});