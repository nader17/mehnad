function say(word) {
  console.log(word);
}

function execute(someFunction, value){
  someFunction(value);
}

console.log("-----------\n");
console.log("aanroep functie \n");
say("Hallo");
execute(say, "Hello");

execute(function(word){ console.log(word)}, "World")

var http = require("http");

function onRequest(request, response) {
  console.log("Request received."); 
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("server has started.");
