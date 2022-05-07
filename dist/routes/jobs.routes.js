"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const get_jobs_1 = __importDefault(require("../controllers/get.jobs"));
const post_job_1 = __importDefault(require("../controllers/post.job"));
const authenticator_1 = require("../middleware/authenticator");
//All routes
router.route("/joblist").post(get_jobs_1.default);
router.route("/postjob").post(authenticator_1.authenticate, post_job_1.default);
exports.default = router;
