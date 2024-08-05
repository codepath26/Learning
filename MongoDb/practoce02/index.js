const http = require('http');

const server = http.createServer((req ,res)=>{
  // console.log(req);
  const reqObj = JSON.stringify(req);
  res.end(reqObj);
});


server.listen(3000 , ()=>{
  console.log('server is running on port 3000')
});