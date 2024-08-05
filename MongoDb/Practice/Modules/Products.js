const {Schema, default: mongoose} = require('mongoose');

const Product = mongoose.model("Product",new Schema({
  name : {
    type : String,
    required : true
  },
  price : {
    type : Number,
    required  : true,
  },
  description : String,
  category : String,
  stock : {
    type : Number,
    default : 0,
  },
  
}));
module.exports = Product;





