//constructor function

function User(username , email , password){
  this.username  =  username;
  this.email = email;
  this.password = password ;
  // return this  // is not required for constructor function when use new keyword and pass onlt assetial detail not give all data from the function
}


// This gone a change your value or override all velue everytime bro must use new keyword when you make new user 
// const userOne = User("Parth" ,"parht@123gmail.com" , 123);
// console.log(userOne)
// const userTwo = User("Rohan" ,"rohan@123gmail.com" , 456);
// console.log(userOne)


const userOne =  new User("Parth" ,"parht@123gmail.com" , 123);
const userTwo =  new User("Rohan" ,"rohan@123gmail.com" , 456);
// console.log(userOne)
// console.log(userTwo)

function h(){
  // console.log(this)
}
const d = ()=>{
  console.log(this)
}
d();
h();