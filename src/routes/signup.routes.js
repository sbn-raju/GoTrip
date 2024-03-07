const express = require("express");
const app = express.Router();
const signupController = require("../controllers/signup.controllers.js");

const signupRoute = app.get("/signup",signupController);
module.exports = signupRoute;