const {MongoClient} = require('mongodb')

const uri = 'mongodb+srv://parth26:parth123@mynew.ixwflah.mongodb.net/?retryWrites=true&w=majority';


const client = new MongoClient(uri);
async function main (){
  try{
    await client.connect();
    console.log("Connected to mongoDB");
    const collection  = client.db('newshop').collection('products');
    const data =await collection.find({version : {$gt : 10}}).toArray();
    console.log(data);
  }catch(err){
    console.log(err);
  }
}
main();