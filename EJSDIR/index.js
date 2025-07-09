const express = require("express");
const app = express();

const port = 3000;

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/htmlejs"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/dice", (req, res) => {
  let diceval = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { num: diceval });
});

app.get("/ig/:username",(req,res)=>{
  let {username} = req.params;
  res.render("instagram.ejs",{username});
})
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
