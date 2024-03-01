import express from "express";
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env",
});
const app = express();

connectDB();
app.listen(process.env.PORT||8080,()=>{
    console.log("App is listening at the port");
});


