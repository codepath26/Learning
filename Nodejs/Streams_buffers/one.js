// when dealing with I/O operations like reading and writing files, handling network communication, and processing large amounts of data.

// Buffers:
// A buffer is a temporary storage area for binary data. It is essentially a raw memory allocation outside the V8 JavaScript engine. Buffers are useful when you need to work with binary data, such as reading and writing files or working with network protocols. Buffers are implemented in C++ but can be accessed in JavaScript through the Buffer class.

// Key points about buffers:

// Binary Data: Buffers can store binary data in a fixed-size memory block. They are commonly used for reading and writing binary data, like images, audio, and binary protocols.

// Fixed Size: Buffers have a fixed size when created, and their size cannot be changed dynamically.

// Efficiency: Buffers are efficient for handling raw binary data because they provide direct access to memory.

const buffer = Buffer.alloc(10); // allocated 10 bytes memory  at the outside of the v8 engine
buffer.write('this is the first name');
console.log(buffer.toString());


// Streams
// Streams are a mechanism in Node.js for efficiently reading or writing data from one source to another in a way that doesn't require loading the entire data into memory at once. They allow you to work with data in smaller, manageable chunks. Streams can be used for reading from files, writing to files, handling network communication, and more.
// There are several types of streams in Node.js, including Readable, Writable, Duplex, and Transform streams. These streams can be piped together to create data processing pipelines
// it  can reand chunk of data also wirte the chunk of data at the place of the total entire data
// Efficiency: Streams allow you to work with data in small, manageable pieces, reducing memory consumption and making it possible to process large files or streams of data.

// Event-Driven: Streams are event-driven, which means you can listen for events like 'data' (when data is available) and 'end' (when the stream ends) to handle data as it flows through the stream.

// *********************************************************************************************************

// Pipelines:  You can connect multiple streams into a pipeline, where data flows from one stream to another, 
// allowing you to process, transform, or filter the data in real-time.

// *********************************************************************************************************
const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

// Summerry 
// Yes, that's a good way to think about it. Buffers are like containers that store raw binary data in a fixed-size memory block. They provide a place to hold data in memory.

// Streams, on the other hand, are a way to process that data in smaller, more manageable pieces as it flows through a pipeline. Streams allow you to work with data incrementally, reading or writing it in chunks, which is particularly useful when dealing with large datasets or continuous data sources.

// incase You video

// when we whach the video then video not download all it's getting the chunk of data which show into video by white another line which store into  the buffer which have small storage or we can say container which store the data and the chunk of data which are comming is the stream which is use to process the data like read and write from the source not read or write entire data at one time read or write only chunk of data and user not getting stuck at any time of playing the video streams are come and stored into the buffer and we watch the video without buffering/