const express = require("express");
const app = express.Router();
const homeController = require("../controllers/home.controllers.js");

const homeRoute = app.get("/home",homeController);

module.exports = homeRoute;