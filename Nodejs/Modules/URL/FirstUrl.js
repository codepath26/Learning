const url = require('url');
const uc = require('upper-case') // need to install thispackage
const adr= 'http://localhost:8080/default.htm?year=2017&month=february'
const obj = url.parse(adr,true); // true is used for the parsing the quary string with the url and if i passed false then url not parsing the quary stirng only parser base url

// console.log(Object.keys(obj));
// console.log(obj.protocol)
// console.log(obj.slashes)
// console.log(obj.auth)
// console.log(obj. host)
// console.log(obj.port)
// console.log(obj. hostname)
// console.log(obj.hash)
// console.log(obj. search)
console.log(obj.query.month)
console.log(uc.upperCase("name is parth"));
// console.log(obj. pathname)
// console.log(obj.path )
// console.log(obj.href)