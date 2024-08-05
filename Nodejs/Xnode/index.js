const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  console.log(`Massert PID => ${process.pid}`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  // console.log(`Cluseter Worker PID => ${process.pid}`);
  const express = require("express");
  const app = express();
  app.get("/", (req, res) => {
    res.send(`<h1>false page ${process.pid}</h1>`);
  });
  app.get("/slow-page", (req, res) => {
    for (let i = 0; i < 6000000000; i++) {}
    res.send(`<h1>slow page ${process.pid}</h1>`);
  });
  app.listen(3000, () => {
    console.log("server is runing on port 3000 with PID =>", process.pid);
  });
}
