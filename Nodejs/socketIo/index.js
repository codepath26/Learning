const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
const server = http.createServer(app);
const io = new Server(server);

// socket.io
io.on("connection", (socket) => {
  console.log("new user connnected", socket.id);
  socket.on("user-message", (message) => {
    // console.log(message);
    io.emit("message", message);
  });
});

// http method use
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

server.listen(3000, () => {
  console.log("server is runing  on port 3000");
});
