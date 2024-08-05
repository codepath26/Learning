const http = require('http');
const server = http.createServer((req,res)  => {
if(req.url === "/home"){
  console.log("this")
  res.statusCode = 200;
  // res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Welcome Home</h1>")
}
if(req.url === "/about"){
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Welcome To about page</h1>")
}
if(req.url === "/node"){
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Welcome to my node js project</h1>")
}
if(req.url === '/'){
  res.statusCode = 200;
  // res.setHeader("Content-Type" , "text/plain");
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${req.url} is the url of this page`)
}
})
server.listen(3000 , ()=>{
  console.log("server is running port num 3000")
})