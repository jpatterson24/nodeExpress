//Here we require/import the HTTP module
var http = require("http");

//Standard port for web machines
var PORTONE = 7000;
var PORTTWO = 7500;


//Here we create a generic funciton to handle requests and responses
function RequestOne(request, response){


	response.end("It Works!! You are Awesone!! ");

}

function RequestTwo(request, response){


	response.end("It Works!! Sorry Dude You Suck!! ");

}
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(RequestOne);
var serverTWO = http.createServer(RequestTwo);


// Start our server so that it can begin listening to client requests.
serverOne.listen(PORTONE, function() {

	//Log (server-side) when our server has started
	console.log("Server listening on: http://localhost:" + PORTONE);
});


// Start our server so that it can begin listening to client requests.
serverTWO.listen(PORTTWO, function() {

	//Log (server-side) when our server has started
	console.log("Server listening on: http://localhost:" + PORTTWO);
});