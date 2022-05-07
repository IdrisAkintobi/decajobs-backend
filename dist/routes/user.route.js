"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const create_user_1 = __importDefault(require("../controllers/create.user"));
const login_user_1 = __importDefault(require("../controllers/login.user"));
const create_resume_1 = __importDefault(require("../controllers/create.resume"));
const authenticator_1 = require("../middleware/authenticator");
router.route("/create").post(create_user_1.default);
router.route("/login").post(login_user_1.default);
router.route("/createresume").post(authenticator_1.authenticate, create_resume_1.default);
exports.default = router;
