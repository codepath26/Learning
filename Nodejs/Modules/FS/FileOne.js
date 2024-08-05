const http = require('http');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'file.txt');
console.log(filePath)
const data = fs.readFileSync(filePath, 'utf8');
console.log(data);

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// To delete the file from the directory

  // fs.unlink('mynewfile1.txt',(err)=>{
  //   err ? console.log(err): console.log("File Deleted Successfully");

  // })

  //To rename the file 

  fs.rename('mynewfile1.txt' , 'newone.txt',(err)=>{
    err ? console.log(err) : console.log('file renamed');
  })






const server = http.createServer((req,res)=>{
  const url = req.url;
  const method = req.method;
  if(url === '/'){
    const name = fs.readFile('name.txt',(err,data)=>{
      if(err){
        console.log(err);
      }else{
        res.write(`<html>`)
        res.write(`<head><title>FIrst DEMO</title></head>`);
        res.write(`<body><h1>${data? data : 'Welcome'}</h1></body><br/>`);
        res.write(`<form action="/name" method="POST">
        <input type="text"  name="username">
        <button type="submit">Add Data</button>
        </form>`);
        res.write(`</html>`);
        res.end();
      }
      
      
    });
  }

  if(url === "/name" && method === 'POST'){
   const body = [];
   req.on('data',(chunk)=>{
    console.log(chunk);
    body.push(chunk);
   });
   console.log("body",body);
   req.on('end',()=>{
    const bodyParse = Buffer.concat(body).toString();
    console.log("bodyparser",bodyParse);
    const name = bodyParse.split('=')[1];

    //Method 01 both are correct method to used
    // fs.appendFile('name2.txt',name,(err)=>{
    //     err ? console.log(err) : console.log("Updated!");
    // })
    //method 02  first one is good method to use
     fs.writeFile('name.txt',name,{flag : "a"},(err)=>{
      if(err){
        console.log(err)
      }else{
        // res.redirect('/');
        res.writeHead(302,{"Location" : '/'});
        res.end();
      }
     })
   })
  }
});

server.listen(3000 , ()=>{
  console.log("server is running  on port 3000");
})