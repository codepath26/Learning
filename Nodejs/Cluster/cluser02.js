const http = require("http");
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  const numCpu = os.cpus().length;
  console.log(numCpu + " and " + process.pid);
  for (let i = 0; i < numCpu; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.end(`<h1>Hello from the server and pid is ==> ${process.pid} </h1>`);
    }
    if (req.url === "/slow") {
      for (let i = 0; i < 9000000000; i++) {}
      res.end(`<h1>slow page with pid ${process.pid}</h1>`);
    }
  });

  server.on("error", (err) => {
    console.error(err);
  });

  server.listen(3000, () => {
    console.log(`server is running on port 3000 with pid is ${process.pid}`);
  });
}



const http = require("node:http");
const process = require("node:process");
const cluster = require("node:cluster");

if (cluster.isPrimary) {
  console.log("this primary server runing on", process.pid);
  for (let i = 0; i < 8; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      if (req.url === "/") {
        res.writeHead(200, "Content-Type", "text/html");
        res.end(`hello from the server ==>${process.pid}`);
      }
      if (req.url === "/slow-page") {
        for (let i = 0; i < 9000000000; i++) {}
        res.writeHead(200, "Content-Type", "text/html");
        res.end(`<h1>THis is the slow page</h1> ====> ${process.pid}`);
        res.end(`<h1>THis is the slow page</h1> ====> ${process.pid}`);
      }
    })
    .listen(3000, () => {
      console.log(`server is running with ${process.pid}`);
    });
}

