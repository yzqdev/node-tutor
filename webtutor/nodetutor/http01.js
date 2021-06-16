var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, {
        "content-type": "text/html"
    });
    res.write("Hello NodeJs");
    res.end();
}).listen(3000);
console.log('listening localhost:3000');
