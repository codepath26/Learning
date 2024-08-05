const fs = require("fs");
const readableStream = fs.createReadStream("index.txt", "utf-8");
const writeableStream = fs.createWriteStream("demon.txt", "utf-8");
readableStream.pipe(writeableStream);
