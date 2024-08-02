// console.log("Backend Server is up and running ")
import express from "express";

const app = express();
app.get("/",(req,res)=>{
    res.send("Server is ready noe")
})

app.listen(8083,()=>{
    console.log("Server is Up and Running on port 8083")
})