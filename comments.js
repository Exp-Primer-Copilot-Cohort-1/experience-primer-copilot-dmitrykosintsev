// Create web server
// 1. Load the http module
var http = require('http');
var fs = require('fs');
// 2. Create a server
http.createServer(function (req, res) {
    // 3. Write the response header
    res.writeHead(200, {'Content-Type': 'text/html'});
    // 4. Write the response body
    fs.readFile('comments.html', function(err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.write(data);
            res.end();
        }
    });
}).listen(8080);
console.log('Server running at http://