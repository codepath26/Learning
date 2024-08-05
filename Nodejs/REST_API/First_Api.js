require('dotenv').config();
const express = require('express')
//Routes
const ItemsRoutes = require('./Routes/Items');


const app  = express();

//  now this time we have inbuild method to parse the body into express don't need to install the body-parser

app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use(ItemsRoutes)

app.listen(process.env.PORT,()=>{
  console.log(`server is running on port ${process.env.PORT}`);
})

