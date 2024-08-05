const sequelize = require('./database.js');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.js');
const app = express();




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}));


app.use('/user' , userRoutes);
sequelize.sync({force : false})
.then(()=>{
  app.listen(3000 , ()=>{
    console.log("server is running on port 3000");
  })
})

console.log("hellw");