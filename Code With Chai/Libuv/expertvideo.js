process.nextTick(()=>{
  console.log("process nexttick 01")
})
process.nextTick(()=>{
  console.log("process nexttick 02")
})
process.nextTick(()=>{
  console.log("process nexttick 03")
  process.nextTick(()=>{
    console.log("process nexttick inner process nextTick")
  })
})


// ==> aek var promiss na hath macontrol avijay ae badhu complite karya pachhi j control pachu apechhe mate inner nexttick pachhi thi print thay chhe
Promise.resolve().then(()=>{
  console.log("promise 01 resolved")
  process.nextTick(()=>{
    console.log("Promise inner process nextTick1")
  })
})
Promise.resolve().then(()=>{
  console.log("promise 02 resolved")
  process.nextTick(()=>{
    console.log("Promise inner process nextTick2")
  })
  
})
Promise.resolve().then(()=>{
  console.log("promise 03 resolved")
  process.nextTick(()=>{
    console.log("Promise inner process nextTick3")
  })
})