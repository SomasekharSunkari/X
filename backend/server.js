// console.log("Backend Server is up and running ")
import express from "express";
import authRoutes from "./routes/auth.js"
import dotenv from "dotenv"
import { connect } from "./db/connectToMongo.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
const PORT = process.env.PORT || 5000;
dotenv.config()
app.use("/api/auth",authRoutes)
console.log(process.env.MONGO_URI)
app.get("/",(req,res)=>{
    res.send("Server is ready noe")
})

app.listen(PORT,()=>{
    console.log(`Server is Up and Running on port ${PORT}`)
    connect()
})