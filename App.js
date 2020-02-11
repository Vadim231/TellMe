var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function (request, response) {
	response.sendFile(__dirname + '/register.html');
});

app.get('/main', function (request, response) {
	response.sendFile(__dirname + '/index.html');
});



io.sockets.on('connection', function (socket) {
	console.log("Успешное соединение");

	socket.on('disconnect', function (data) {
		console.log("Отключились");
	});
});
