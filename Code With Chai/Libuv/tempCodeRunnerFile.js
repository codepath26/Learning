
console.log("one")
Promise.resolve().then(()=>{
  console.log("promise is resolved")
})
process.nextTick(()=>{
  console.log("process next tick called");
})
console.log("two")
setTimeout(() => {
  console.log("settime out")
}, 0);

setImmediate(()=>{
  console.log("setimmidiate called")
})