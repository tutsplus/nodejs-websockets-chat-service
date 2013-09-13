<<<<<<< HEAD
//branch for trying chatnode.js setup
=======
//code to debug heroku with simple app  sdf

// var express = require('express'),
// 	app = express();

// app.get('/', function (req, res) {
// 	res.send("Hello world bad ass");

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
>>>>>>> 063b9fd3761efc621c9ae3641bdc4cadb4773584

//var express = require('express'), app = express.createServer();

// var http = require('http');
// var express = require('express'), app = express();
// var server = http.createServer(app).listen(port);
// var jade = require('jade');
// var io = require('socket.io').listen(server);


var appPort =  process.env.PORT || 3000;

var express = require('express'), app = express();
var http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);



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
<<<<<<< HEAD


server.listen(appPort);
// app.listen(appPort);
console.log("Server listening on port" + appPort);


// var port = process.env.PORT || 3000;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });
// console.log("express server started on 3000");
=======
//
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
console.log("express server started on 3000");
>>>>>>> 063b9fd3761efc621c9ae3641bdc4cadb4773584


io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});

<<<<<<< HEAD

=======
>>>>>>> 063b9fd3761efc621c9ae3641bdc4cadb4773584
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