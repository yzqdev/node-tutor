 var http = require('http');
 var url = require('url');

 function start(route, handler) {
     function onRequest(request, response) {
         var pathname = url.parse(request.url).pathname;
         // 路由到相应的业务逻辑
         route(pathname, handler, response, request);
     }
     http.createServer(onRequest).listen(3000);
     console.log('server is starting');
 }
 exports.start = start;
