//code to debug heroku with simple app

// var express = require('express'),
// 	app = express();

// app.get('/', function (req, res) {
// 	res.send("Hello world");

// app.get('*', function (req, res) {
// 	res.send("page not found");
// })

// } );

// //app.listen(8080);

// var port = process.env.PORT || 5000;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });
// console.log("express server started on 8080");

//var express = require('express'), app = express.createServer();

var http = require('http');
var express = require('express'), app = express();
var server = http.createServer(app).listen(3000);
var jade = require('jade');
var io = require('socket.io').listen(server);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set("view options", { layout: false });
app.configure(function() {
	app.use(express.static(__dirname + '/public'));
});
app.get('/', function(req, res){
  res.render('home.jade');
});
//app.listen(3000);
//
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
console.log("express server started on 8080");
io.sockets.on('connection', function (socket) {
	socket.on('setPseudo', function (data) {
		socket.set('pseudo', data);
	});
	socket.on('message', function (message) {
		socket.get('pseudo', function (error, name) {
			var data = { 'message' : message, pseudo : name };
			socket.broadcast.emit('message', data);
			console.log("user " + name + " send this : " + message);
		})
	});
});