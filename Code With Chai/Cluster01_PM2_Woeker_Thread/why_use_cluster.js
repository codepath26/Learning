const http = require('http')

//First time its take milisecond but when you reload first slow page and after reload home page then the single core bussy with the solw page then home page render after some second now this time cluster comes into the picture bro
const server = http.createServer((req ,res)=>{
  if(req.url === '/'){
    res.writeHead(200 , {"Content-Type" : "text/plain"})
    res.end("Home Page")
  }

  //if first reload this page which blocking the main thread for 7 to 8 sec and in this second if you reload the home page then it also getting the same second to load the page so that use the cluster to improve the perfomance of the application
  
  if(req.url === '/slow-page'){
    for (let i =0 ; i <6000000000 ; i++){}
      res.writeHead(200 , {"Content-Type" : "text/plain"})
      res.end("Slow Page")
  }
})
server.listen(3000 , ()=>{
  console.log("server is runnig on port 3000");
})