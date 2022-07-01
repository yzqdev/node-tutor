import https from "node:https";
let list = [];
let buffer,
  html = null;
let req = https.request(
  {
    hostname: "iconfont.cn/collections",
    method: "GET",
    port: 443,
    path: "/",
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36",
    },
  },
  (res) => {
    res.on("data", function (data) {
      list.push(data);
    });
    res.on("end", () => {
      buffer = Buffer.concat(list);
      html = buffer.toString();
      console.log(html);
    });
  }
);
req.end();
