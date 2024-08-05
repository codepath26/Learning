const fs = require('node:fs')

const readableStream = fs.createReadStream('./Modules/FS/file.txt',{
  encoding:'utf-8',
  highWaterMark:4
});
const writeableStream = fs.createWriteStream('./file.txt');

readableStream.on('data' , (chunk)=>{
  console.log(chunk);
  writeableStream.write(chunk);
})