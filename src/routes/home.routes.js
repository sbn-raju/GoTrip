import { Router } from "express";
import { homeRoute } from "../controllers/home.controllers.js";
const router = Router();


router.route("/home").get(homeRoute);
export default router