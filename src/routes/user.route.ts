import express from "express";
const router = express.Router();
import createUser from "../controllers/create.user";
import loginUser from "../controllers/login.user";
import createResume from "../controllers/create.resume";
import { authenticate } from "../middleware/authenticator";

router.route("/create").post(createUser);

router.route("/login").post(loginUser);

router.route("/createresume").post(authenticate, createResume);

export default router;
