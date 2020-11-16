var http = require('http');
var x = process.argv.slice(2);
var myArgs = Number(x);

http.createServer(handler).listen(myArgs, start_callback);

function handler(req, res) {
    res.writeHead(200, "<h1>Hello World!</h1>", {'Content-Type': 'text/html'});
    res.write("<h1>Hello World!</h1>");
    res.end();        
    return;
}

function start_callback(){
    console.log('Start HTTP on port ' + myArgs);
}