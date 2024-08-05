const router = require("express").Router();

const items = [];
//create
router.post("/items", async (req, res, next) => {
  try {
    const item = req.body;
    console.log(item)
    if(item.length > 0){
       for(let i =0 ; i<item.length ; i++){
        console.log(i);
        items.push(item[i]);
       }
    }else{
      items.push(item);
    }
    res.status(200).json("user created successfully");
  } catch (err) {
    console.log(err);
  }
});
router.get("/", async (req, res) => {
  try {
    console.log("this");
    res.send("<h1>this is the home page</h1>");
  } catch (err) {
    console.log(err);
    res.status(404).json("something went wrong");
  }
});

// read
router.get("/items", (req, res) => {
  res.status(200).json(items);
});
router.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items[id];
});

// update
router.put("/items/:id", async (req, res) => {
  try {
    console.log(req.params)
    const id = parseInt(req.params.id);
    console.log(id);
    const updatedItem = req.body;
    console.log(updatedItem);
    items[id] = updatedItem;
   res.status(200).json(items);
  } catch (err) {
    console.log(err);
  }

});

//delete
router.delete("/items/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (items[id]) {
      items.splice(id, 1);
      res.status(200).json({ message: "Item deleted successfully" });
    } else {
      res.status(404).jsong({ message: "Item not found with this id" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
