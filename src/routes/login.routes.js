const express = require("express");
const app = express.Router();
const loginController = require("../controllers/login.controllers.js");
const loginPostController = require("../controllers/login.controllers.js");

const loginRoute = app.get('/login',loginController);
const loginRoutePost = app.post("/login/post",loginPostController)

module.exports = [loginRoute, loginRoutePost];