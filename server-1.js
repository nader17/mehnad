var http = require("http")

http.createServer(function(request, response) {
  response.writeHead(200, {"contente-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

