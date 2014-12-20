var http = require("http");
var server = http.createServer(function(req,rep){
	rep.writeHead(200);
	rep.end("hello world\n");
}).listen(8000);

console.log("Server is listening");
