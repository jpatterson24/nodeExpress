//Here we require/import the HTTP module
var http = require("http");

//Standard port for web machines
var PORT = 7000;

//Here we create a generic funciton to handle requests and responses
function handleRequest(request, response){


	response.end("It Works!! You are Awesone!! " + request.url);

}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

	//Log (server-side) when our server has started
	console.log("Server listening on: http://localhost:%s" + PORT);
});


//Here we require/import the HTTP module
var http = require("http");

//Standard port for web machines
var PORT = 7500;

//Here we create a generic funciton to handle requests and responses
function handleRequest(request, response){


	response.end("It Works!! Sorry Dude You Suck!! " + request.url);

}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

	//Log (server-side) when our server has started
	console.log("Server listening on: http://localhost:%s" + PORT);
});