const http = require('http');
const {Worker} = require('worker_threads');
  console.log(`Worker ${process.pid} started`);
  const server = http.createServer((req ,res)=>{
    if(req.url === '/'){
      res.writeHead(200 , {"Content-Type" : "text/plain"})
      res.end("Home Page")
    }   
    else if(req.url === '/slow-page'){
      const worker = new Worker('./Cluster01_PM2_Woeker_Thread/worker_thread.js')
      worker.on('message' , (j)=>{
        res.writeHead(200 , {"Content-Type" : "text/plain"})
        res.end(`Slow Page${j}`)
      })
      
    }
  })
  server.listen(3000 , ()=>{
    console.log("server is runnig on port 3000");
  })
  

