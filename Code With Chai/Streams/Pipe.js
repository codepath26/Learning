const fs = require('fs')

const readableStreams = fs.createReadStream('./greet.txt',{
  encoding : 'utf-8',
  highWaterMark: 2,
});
const writeableStream = fs.createWriteStream("./file.txt");
readableStreams.pipe(writeableStream);