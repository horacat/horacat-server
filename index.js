var http = require('http');

http.createServer(function(req, res) {
  res.write("hello world\n");
  res.end();
}).listen(6969);
