// Create web server
// Create a web server that listens to the port 3000 and serves the comments.json file.
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    fs.readFile('comments.json', function(err, data) {
        res.write(data);
        res.end();
    });
}).listen(3000);
console.log('Server running at http://localhost:3000/');