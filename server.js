const express = require("express")
const bodyParser = require('body-parser')
const getPairPrice = require("./index")

const app = express()
app.use(bodyParser.json())

console.log(getPairPrice);

// app.get("/getpairprice/:one/:two" , async function(req , res){
//     try{
//         console.log("Vfvfvf");
//         const one = req.params.one
//         const two = req.params.two
        
//         const res = await getPairPrice(one , two)
//     }
//     catch(err){

//     }
// })

app.get("/getpairprice/:one" , async function(req , res){
    try{
        console.log("Vfvfvf");
        // const one = req.params.one
        // const two = req.params.two
        
        // const res = await getPairPrice(one , two)
    }
    catch(err){
        console.log(err);
    }
})

app.listen(5000 , function(){
    console.log("server started at port 5000");
})