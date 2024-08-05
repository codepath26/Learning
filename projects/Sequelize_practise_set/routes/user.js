const express = require("express");
const  User  = require("../models/user");
const router = express.Router();


// CREATE

router.post('/add-user',async(req,res,next)=>{
 const {name , email} = req.body;
 console.log(User)
const user = await User.create({
  username : name,
  email: email,
})
console.log(user);
  res.status(200).json(user);
});

router.post('/add-users',async(req,res,next)=>{
 const usersArray = req.body;
const users = await User.bulkCreate(usersArray);
console.log(users);
  res.status(200).json(users);
});


// READ 
router.get('/all-users',async(req ,res)=>{
  const users = await User.findAll();
  res.status(201).json(users);
})
router.get('/get-user/:userId',async(req ,res)=>{
  console.log("routes parameter");
  const userId = req.params.userId;
  console.log(userId);
  const user = await User.findByPk(userId);
  res.status(201).json(user);
})
router.get('/get-user',async(req ,res)=>{
  console.log("query parameter")
  const userId = req.query.userId;
  console.log(userId);
  const user = await User.findByPk(userId);
  res.status(201).json(user);
})


// UPDATE 
router.post('/update/:userId', async(req ,res)=>{
  const id = req.params.userId;
  console.log(id);
  if(id){
    const { username ,email} = req.body;
    const user = await User.findByPk(id);
    user.username = username ? username : user.username ;
    user.email = email ? email : user.email;
    const newuser = await user.save();
    console.log(newuser);
  }else{
    res.status(404).json("user not found");
  }
})


// DELETE 
router.delete('/delete-user/:userId' , async(req,res)=>{
  const id = req.params.userId;
  if(id){
     const user = await User.findByPk(id);
      const deletedUser = await user.destroy();  
      res.status(201).json(deletedUser);

  }else{
    res.status(404).json("user is not found");
  }
})


router.get('/usernames',async(req,res,next)=>{
  // console.log(User);
  const usernames =await User.findAll({
    attributes : ['username']
  })
  console.log(usernames);
  res.status(201).json(usernames);
})

module.exports = router;