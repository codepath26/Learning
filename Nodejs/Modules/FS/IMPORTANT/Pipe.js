// how to send the data with the help of the only node js if you wanted to send any file to the browser then use the fs module and use the method sendfile at the place of the sendfilesynce because if file size is very large then you app suffering from the perfomance point of view.and


const fs = require('fs');
const http = require('http');


http.createServer((req, res)=>{
  res.writeHead(200,'text/html');
  // const html = fs.readFileSync('./index.html','utf-8');
  console.log(__dirname)
  fs.createReadStream(__dirname + "/index.html").pipe(res);
  // res.end("<h1>This is the h1 tag</h1>");
  // res.end(html);
}).listen(4000 ,()=>{
  console.log("server is running on port 4000");
});

