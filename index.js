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
  // let followers = ["bob","ravi","hari","john","Ela"];
  let {username} = req.params;
  const instadata = require("./data.json");
  const data = instadata[username];
  console.log(data);
  res.render("instagram.ejs",{data : instadata[username]});
})
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
