"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const zod_schemas_1 = require("../config/zod.schemas");
const job_model_1 = __importDefault(require("../model/job.model"));
const users_model_1 = __importDefault(require("../model/users.model"));
// @desc create Job
// @route POST /createjob
// @access Private
const postJob = (0, express_async_handler_1.default)(async (req, res) => {
    const jobData = req.body;
    zod_schemas_1.JobZodSchema.parse(jobData);
    const user = await users_model_1.default.findById(req.user.id);
    if (user.role !== "Recruiter") {
        res.status(400);
        throw new Error("Login as Recruiter to post job");
    }
    //Check if job already exists
    const jobExists = await job_model_1.default.findOne(jobData);
    if (jobExists) {
        console.log(jobData);
        console.log(jobExists);
        res.status(400);
        throw new Error("Job already created");
    }
    try {
        const job = await job_model_1.default.create({ user: user.id, ...jobData });
        res.status(201).json(job);
    }
    catch (err) {
        console.log(err);
        res.status(400);
        throw new Error("Job not created");
    }
});
exports.default = postJob;
