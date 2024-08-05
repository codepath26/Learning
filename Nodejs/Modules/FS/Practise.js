const fs = require('fs');

// fs.readFile(path, [options], callback):
// This method is used to asynchronously read the contents of a file.


// we are able to give the relative and absolute path which not need  to spesify
const relativePath = './Modules/FS/file.txt';
fs.readFile(relativePath,'utf-8',(err,data)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log(data);
  }
})


// write to the file in which we can write if file is not present then it will created automatically  this is also used when we wanted to create new file.


fs.writeFile(relativePath,"this is the write file from the practise set" , (err)=>{
  if(err){
    console.log(err);
  }
});

fs.readdir('./Modules/FS',(err,files)=>{
  if(err){
    console.log(err);
  }else{
    console.log(files);
  }
});

