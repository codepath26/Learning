const obj1 = {
  name : "Parth"
}

function changeName(obj){
  obj.name = "rohan"
};


changeName({...obj1});
console.log(obj1.name)
