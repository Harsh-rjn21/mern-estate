import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"

dotenv.config();


mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("connected to mongoDB");
    }).catch((err)=>{
        console.log(err);
    });

const app = express();

app.use("/api/user",userRoute);


app.listen(3000,()=>{
    console.log("Server is running on 3000!");
})