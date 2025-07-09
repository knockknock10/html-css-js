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

app.get("/nothing",(req,res)=>{
    res.send(`its nothing`);
})

app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send(`nothing is searches`);
    }
    res.send(`the search for ${q} is in process`);
})

app.get("/:username/:passwd",(req,res)=>{
    const {username} = req.params;
    const {passwd} = req.params;

    let html = `Hey @${username} you are welcome and your passwd is ${passwd}`;

    res.send(html);
})

app.post("/",(req,res)=>{
    let html = `Hey something here post post post`;
    res.send(html);
})

app.get(/^.*$/, (req, res) => {
    res.send("this page");
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
