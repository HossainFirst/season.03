var http = require('http');
var x = process.argv.slice(2);
var myArgs = Number(x);

const hostname = '127.0.0.1';
const port = 80;

http.createServer(handler).listen(port, hostname, () => { console.log('Server running at');});

function handler(req, res) {
  res.statusCode = 200;
  if(req.method == "GET"){
      res.write('<h1>Hello World</h1>')
  }
  if(req.method == "POST"){
      res.write('<h1>Heisenber</h1>')
  }

  res.end();

}