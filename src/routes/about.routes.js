import { Router } from "express";
import { aboutRoute } from "../controllers/about.controllers.js";

const router = Router();

router.route("/about").get(aboutRoute);

export default router