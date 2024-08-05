const http = require("http");
const webSocket = require("ws");

const server = http.createServer((req, res) => {
  res.end("<h1>hellow from the backend</h1>");
});
const wss = new webSocket.Server({ server });
wss.on("connection", (ws) => {
  console.log("a new client connected");
  ws.on("message", (msg) => {
    console.log(msg);
  });
});
server.listen(3000, () => {
  console.log("sere runing on port 3000");
});
