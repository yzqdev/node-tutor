var http = require('http')
http.createServer(function (req, res) {
    res.writeHead(200, {
        'content': "text/plaine"
    });
    res.end('helloworld')
}).listen(8888)
console.log('server running at localhost:8888');
