const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  console.log(req.url);
  res.send(` <form method="POST" action="/submit">
                <label for="name">Name:</label>
                <input type="text" id="name" name="message">
                <button type="submit">Submit</button>
            </form>`);
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  console.timeLog(__dirname);
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(3000, () => {
  console.log("server is runing on port 3000");
});
