"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const users_model_1 = __importDefault(require("../model/users.model"));
const zod_schemas_1 = require("../config/zod.schemas");
const resume_model_1 = __importDefault(require("../model/resume.model"));
// @desc create Resume
// @route POST /createresume
// @access Private
const createResume = (0, express_async_handler_1.default)(async (req, res) => {
    const data = req.body;
    zod_schemas_1.ResumeZOdSchema.parse(data);
    const user = await users_model_1.default.findById(req.user.id);
    if (user.role !== "Applicant") {
        res.status(400);
        throw new Error("Login as an Applicant to create resume");
    }
    const resumeExists = await resume_model_1.default.findOne(data);
    if (resumeExists) {
        res.status(400);
        throw new Error("Resume already exists");
    }
    try {
        const resume = await resume_model_1.default.create({ user: user.id, ...data });
        const { FirstName, LastName, email } = resume;
        res.status(201).json({ FirstName, LastName, email });
    }
    catch (err) {
        console.log(err);
        res.status(400);
        throw new Error("Resume not created");
    }
});
exports.default = createResume;
