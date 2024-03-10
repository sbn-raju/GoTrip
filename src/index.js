//NPM PACKAGES
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./db/index.js");
const engine = require("ejs-mate");

//GETTING ROUTES
const indexRoute = require("./routes/index.route.js");
const homeRoute = require("./routes/home.routes.js");
const loginRoute = require("./routes/login.routes.js");
const loginRoutePost = require("./routes/login.routes.js"); 
const signupRoute = require("./routes/signup.routes.js");
const signupRoutePost = require("./routes/signup.routes.js");

//MIDDLEWARES
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views/Pages"));
app.use(express.static(path.join(__dirname,"../public/css")));
app.use(express.static(path.join(__dirname,"../public/js")));
app.use(express.static(path.join(__dirname,"../public/images")));
app.engine('ejs',engine);

//DATABASE CONNECTIONS
connectDB();


// ENIVORNMENT VARIABLES
let port = process.env.PORT || 3000;


// APP ROUTES
app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
});
//Common Routes
app.use('/',indexRoute);
app.get('/home',homeRoute);
//Login Routes
app.get('/login',loginRoute);
app.post('/login/post',loginRoutePost);
//Signup Routes
app.get('/signup',signupRoute);
app.post('/signup/post',signupRoutePost);