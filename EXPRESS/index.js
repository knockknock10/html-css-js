const express = require("express");
const app = express();

let port = 8080;

app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
});

app.get("/login", (req, res) => {
    let a = "enter ur name";
    res.send(`${a} welcome to page`);
});


app.use((req,res)=>{
    console.log("request recived");
    //res.send("Fuck you all");
    // res.send({
    //     name:"Sanjeev Kumar",
    //     Degree:"B.tech"
    // });
    let a = "<h1>Fruits</h1><ul><li>apples</li><li>Banana</li></ul>"
    res.send(a); 
})

