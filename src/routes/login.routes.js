import { Router } from "express";
import { loginRoute } from "../controllers/login.controllers.js";

const router = Router();

router.route("/login").get(loginRoute);

export default router