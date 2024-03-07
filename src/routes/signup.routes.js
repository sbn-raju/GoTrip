const express = require("express");
const app = express.Router();
const signupController = require("../controllers/signup.controllers.js");
const signupControllerPost = require("../controllers/signup.controllers.js");

const signupRoute = app.get("/signup",signupController);
const signupRoutePost = app.post("/signup/post",signupControllerPost);


module.exports = [signupRoute, signupRoutePost];