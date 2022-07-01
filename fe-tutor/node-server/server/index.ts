import http from "node:http";
let server = http.createServer();
// 2. 监听 request 请求事件，设置请求处理函数
server.on("request", function (req, res) {
  console.log("收到请求了，请求路径是：" + req.url);
  console.log("请求我的客户端的地址是：", req.socket.remoteAddress, req.socket.remotePort);
  // 根据不同的请求路径发送不同的响应结果
  // 1. 获取请求路径
  //    req.url 获取到的是端口号之后的那一部分路径
  //    也就是说所有的 url 都是以 / 开头的
  // 2. 判断路径处理响应
  let url = req.url;
  if (url === "/") {
    // 响应内容只能是二进制数据或者字符串
    //  数字
    //  对象
    //  数组
    //  布尔值
    // 直接 end 的同时发送响应数据
    res.end("index page");
  } else if (url === "/login") {
    console.log(res);
    console.log(req);
    res.end("login page");
  } else if (url === "/register") {
    res.end("register page");
  } else {
    res.end("404 Not Found.");
  }
});

// 3. 绑定端口号，启动服务
server.listen(3000, function () {
  console.log("服务器启动成功，可以访问了。。。");
});
