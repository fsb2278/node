var https = require('https');
var fs = require('fs');

var options = { key: fs.readFileSync('ssl/key.pem'), cert: fs.readFileSync('ssl/cert.pem')};

var server = https.createServer(options, function(req, res){
	res.writeHead(200);
	res.end('hello world with ssl\n');
}).listen(8000);

console.log('started');
