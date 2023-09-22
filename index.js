const express=require('express')
const app=express()
const port=8080
require('dotenv').config()



app.get("/", async (req,res) =>{
    
    console.log("req.body",req.body)
    console.log("req.params",req.query)
    res.send({'glide':'funciona'})
})


app.listen(port,()=>{
    console.log("app conectada en port 8080 ")
})
