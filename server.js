// Load required modules
const https = require("https"); // https server core module
const fs = require("fs"); // file system core module
const express = require("express"); // web framework external module
const io = require("socket.io"); // web socket external module
const os =require('os');
// This sample is using the easyrtc from parent folder.
// To use this server_example folder only without parent folder:
// 1. you need to replace this "require("../");" by "require("easyrtc");"
// 2. install easyrtc (npm i easyrtc --save) in server_example/package.json

const easyrtc = require("easyrtc"); // EasyRTC internal module

// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
const httpApp = express();
httpApp.use(express.static(__dirname + "/static/"));

// Start Express https server on port 443
const webServer = https.createServer(
  {
    key: fs.readFileSync(__dirname + "/certs/localhost.key"),
    cert: fs.readFileSync(__dirname + "/certs/localhost.crt")
  },
  httpApp
);

// Start Socket.io so it attaches itself to Express server
const socketServer = io.listen(webServer, {"log level": 1});

// Start EasyRTC server
const rtc = easyrtc.listen(httpApp, socketServer);

function getIPAdress() {
  const interfaces = os.networkInterfaces();

  for (let deviceName in interfaces) {
    const iface = interfaces[deviceName];
    // console.log(iface);
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
  return "localhost";
}

// Listen on port 443
webServer.listen(443, function() {
  console.log("listening on https://" + getIPAdress());
});
