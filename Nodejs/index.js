const express = require("express");
const app = express();
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// app.use(express.static(path.join(__dirname, "/public")));
// const token = jwt.sign(
//   {
//     id: "93rd43fdfg",
//     email: "parththakor2520@gmail.com",
//     name: "parth",
//   },
//   "ijdfoisjfsodif3284u2sdjflskdjfs",
//   { expiresIn: "40h" }
// );
// console.log(token);
// const data = jwt.verify(token, "ijdfoisjfsodif3284u2sdjflskdjfs");
// console.log(data);
const hasPass = async () => {
  const hasPassword = await bcrypt.hash("Parth#123", 10);
  // console.log(hasPassword);
  return hasPassword;
};
hasPass().then(async (result) => {
  console.log(result);
  const ds = await bcrypt.compare("rohand#12", result);
  const ds2 = await bcrypt.compare("Parth#123", result);
  console.log(ds);
  console.log(ds2);
});

app.get("/", (req, res) => {
  // console.log(req.query);
  const { name, age } = req.query;
  res.send(`<h1>Name : ${name}  and age : ${age}</h1>`);
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
