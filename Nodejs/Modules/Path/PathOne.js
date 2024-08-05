const path = require('path');

// console.log(path);
const fullPath = path.join('mydir','subdir','file.txt');
// console.log(fullPath)

// resolve give the absolute path from base like drive C
const fullPath2 = path.resolve('Path','file.txt');
// console.log(fullPath2);

// return the dirname of the give path 
const dirname = path.dirname(fullPath2);
// console.log(dirname);

// basename always return last portion of the path you can remove thefile extension

const filename = path.basename(fullPath2);
// console.log(filename);
const filename2 = path.basename(fullPath2 ,'.txt');
// console.log(filename2);

// return the file exention 

const ext  = path.extname(fullPath2);
const newfile = 'roan.html';
// console.log(ext)
const ext2 = path.extname(newfile)
// console.log(ext2)


// makke the path to normalize
const normalizedPath = path.normalize('/mydir/../subdir/./file.txt');
// console.log(normalizedPath);
// Output: '/subdir/file.txt'


//check path is absolute or not

const isAbsolute = path.isAbsolute(fullPath2);
const isAbsolute2 = path.isAbsolute(fullPath);
console.log(fullPath2, "===>" ,isAbsolute) 
console.log(fullPath,"==>",isAbsolute2)


// check which type of seperator is usedinto the path 
console.log(path.sep)