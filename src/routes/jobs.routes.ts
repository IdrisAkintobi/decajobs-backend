import express from "express";
const router = express.Router();
import getJobs from "../controllers/get.jobs";
import postJob from "../controllers/post.job";
import { authenticate } from "../middleware/authenticator";

//All routes

router.route("/joblist").post(getJobs);

router.route("/postjob").post(authenticate, postJob);

export default router;
