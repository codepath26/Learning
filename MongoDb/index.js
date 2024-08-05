const newPromise = new Promise((res,rej)=>{
  setTimeout(() => {
    const number = Math.random();
    if(number > 0.5){
      res(number);
    }else{
      rej(`Random number is less then 0.5`);
    }
  }, 1000);
});

newPromise.then(result=>{
  console.log('promise is resolved with',result);
}).catch(err=>console.log(err))

