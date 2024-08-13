// console.log("Backend Server is up and running ")
import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import notificationRoutes from "./routes/notifications.js"
import dotenv from "dotenv"
import {v2 as cloudinary} from "cloudinary";
import { connect } from "./db/connectToMongo.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json())
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:  process.env.CLOUDINARY_API_SECRET
})
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
const PORT = process.env.PORT || 5000;
dotenv.config()
app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/notifications",notificationRoutes);
app.get("/",(req,res)=>{
    res.send("Server is ready noe")
})
app.listen(PORT,()=>{
    console.log(`Server is Up and Running on port ${PORT}`)
    connect()
})