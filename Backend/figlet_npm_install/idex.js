const figlet = require("figlet");
figlet("Sanjeev",function(err,data){
    if(err){
        console.log("something went wrong");
        console.log(err);
        return;
    }
    console.log(data);
})