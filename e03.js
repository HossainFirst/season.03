var http = require('http');
const fs = require('fs');

var x = process.argv.slice(2);
var myArgs = Number(x);

const hostname = '127.0.0.1';
const port = 80;

http.createServer(handler).listen(port, hostname, () => { console.log('Server running at');});

function handler(req, res) {
  res.statusCode = 200;
  const html = fs.readFileSync('./index.html','utf-8');
  res.write(html);
  res.end();

}