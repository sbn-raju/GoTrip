import express from "express";
import dotenv from 'dotenv';
import homeRouter from "./routes/home.routes.js"
import aboutRouter from "./routes/about.routes.js"
import loginRouter from "./routes/login.routes.js"
import connectDB from "./db/index.js";
dotenv.config({
    path:"./env",
});

const app = express();

//Mongo Db Connection
connectDB();


//App listen 
app.listen(process.env.PORT,()=>{
    console.log("App is listening at the port");
});

//App Routes
app.get("/",(req,res)=>{
    res.send("App is working");
});
app.get("/home",homeRouter);
app.get("/about",aboutRouter)
app.get("/login",loginRouter);




