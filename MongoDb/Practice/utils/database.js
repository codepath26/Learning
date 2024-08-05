const mongoose = require("mongoose");
const uri = 'mongodb+srv://parth26:parth123@mynew.ixwflah.mongodb.net/practise?retryWrites=true&w=majority'

const connectToDatabase = async()=>{
  try{

    await mongoose.connect(uri);
    console.log('connected from mongoose');
  }catch(err){
    console.log(err);
  }
}

const disconnectFromDatabase =async ()=>{
try{

  await mongoose.disconnect();
  console.log('disconnected from database');
}catch(err){
  console.log(err);
}
}

module.exports = {connectToDatabase , disconnectFromDatabase};


