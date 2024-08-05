const fs = require('fs')
const zlib = require('zlib')
const gzip = zlib.createGzip();
const readableStreams = fs.createReadStream('./greet.txt',{
  encoding : 'utf-8',
  highWaterMark: 2,
});
readableStreams.pipe(gzip).pipe(fs.WriteStream('./file.txt.gz'))
const writeableStream = fs.createWriteStream("./file.txt");
readableStreams.pipe(writeableStream);