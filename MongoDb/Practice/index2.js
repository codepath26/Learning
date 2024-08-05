require('dotenv').config();
const express  = require('express');
const {connectToDatabase,disconnectFromDatabase} = require('./utils/database');


const app = express();

// some body parser
app.use(express.json())
app.use(express.urlencoded({extended : false}));
connectToDatabase();

//Routes 
const produtsRoutes =require('./Routes/Products');
const { connect } = require('mongoose');

app.use(produtsRoutes);
app.listen(process.env.PORT,()=>{
  console.log(`app is running on port ${process.env.PORT}`);
});