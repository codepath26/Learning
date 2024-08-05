const Product  = require('../Modules/Products');

//Create
const addProducts = async(req,res)=>{
  try{
    const products = req.body
    console.log('products ==> ', products);
    const addedProducts = await Product.create(products);
    res.status(200).json(addedProducts); 
  }catch(err){
    console.log(err);
    res.status(500).json({error : "Error adding product"})
  }
}

//  Read

const getProduct = async(req ,res)=>{
  try{
    const id = req.params.id;
    console.log(id);
    const product = await Product.find({_id : id});
    console.log("product ==>",product);
    res.status(200).json(product);
  }catch(err){
    console.log(err);
    res.status(404).json("something went wrong");
  }
  
} 
const getProducts = async( req ,res)=>{
  try{
    const products = await Product.find();
    console.log(products);
    res.status(302).json(products);
  }catch(err){
    console.log(err);
    res.status(500).json("Something went Wrong")
  }
}
const updateProduct = async (req,res)=>{
  const id = req.params.id;
  console.log('id ==>',id)
  const product = req.body;
  console.log("product ==>",product);
  const updatedProduct = {}
  try{
    //create the object with updated field 
    for(const key in product){
      if(product.hasOwnProperty(key)){
        updatedProduct[key]  = product[key];
        }
      }
 // update the all filed on database
 const result = await Product.updateOne({_id : id},{$set : updatedProduct});
console.log(result);
 if(result.modifiedCount > 0){
  console.log('item updated');
  res.status(200).json(result);
 }else{
  res.status(200).json({error : "product not found"});
 }


  }catch(err){
    console.log(err);
    res.status(404).json('something went wrong');
  } 
}

const deleteProduct = async (req ,res)=>{
  console.log("delete the product")
  const id = req.params.id;
  try{
     await Product.deleteOne({_id : id});
    res.status(302).json("product deleted!");
  }catch(err){
    console.log(err);
    res.status(404).json('something went wrong');
  }
}


module.exports ={
  addProducts,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
}