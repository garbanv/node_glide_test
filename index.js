const express=require('express')
const app=express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port=8000
require('dotenv').config()





const usersRoute=require('./routes/usersRoutes')
const datasetsRoute=require('./routes/datasets/datasetsRoutes')


app.use("/users/",usersRoute)
app.use("/datasets/", datasetsRoute)

app.listen(port,()=>{
    console.log("app conectada en port 8000")
})
