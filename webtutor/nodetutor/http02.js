<<<<<<< HEAD
const http = require("http");
const querystring = require("querystring");
const data = {
  a: 111,
  time: new Date().getTime()
};
const content = querystring.stringify(data);
const option = {
  hostname: "localhost",
  port: 3000,
  path: "/" + content,
  method: "get"
};
const req = http.request(options, function(res) {
  console.log(`status:${res.statusCode}`);
  console.log(`headers${JSON.stringify(res.headers)}`);
  res.on("data", function(chunk) {
    console.log(`body${chunk}`);
  });
});
req.on("error", function(e) {
  console.log(`problem${e.message}`);
});
req.end();
=======
var http = require('http')
var querystring = require('querystring')
var data = {
    a: 111,
    time: new Date().getTime()
}
var content = querystring.stringify(data)
var option = {
    hostname: 'localhost',
    port: 3000,
    path: '/' + content,
    method: 'get'

}
var req = http.request(options, function (res) {
    console.log(`status:${res.statusCode}`)
    console.log(`headers${JSON.stringify(res.headers)}`)
    res.on('data', function (chunk) {
        console.log(`body${chunk}`)
    })
})
req.on('error', function (e) {
    console.log(`problem${e.message}`)
})
req.end()
>>>>>>> 45cd24bcc50b250ed42bc5f53fac770c46631ff6
