const express = require("express");
const indexController = require("../controllers/index.controllers.js");
const app = express.Router();

const indexRoute = app.get("/",indexController);

module.exports = indexRoute
// application.get(()=>{})