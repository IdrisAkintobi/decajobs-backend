"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const job_model_1 = __importDefault(require("../model/job.model"));
// @desc get Jobs
// @route GET /joblist
// @access public
const getJobs = (0, express_async_handler_1.default)(async (req, res) => {
    let { category, city, joblist } = req.body;
    if (category === "Select Category")
        category = null;
    if (city === "Choose Region")
        city = null;
    if (category && city && joblist) {
        const titleJobs = await job_model_1.default.find({
            title: joblist,
            category: category,
            location: city,
        });
        const companyJobs = await job_model_1.default.find({
            companyName: joblist,
            category: category,
            location: city,
        });
        const allJobs = [...titleJobs, ...companyJobs];
        if (allJobs.length)
            return res.status(200).json(allJobs);
        else
            return res
                .status(400)
                .json({ message: "No available job for your query" });
    }
    if (!category && city && joblist) {
        const titleJobs = await job_model_1.default.find({ title: joblist, location: city });
        const companyJobs = await job_model_1.default.find({
            companyName: joblist,
            location: city,
        });
        const allJobs = [...titleJobs, ...companyJobs];
        return res.status(200).json(allJobs);
    }
    else if (!city && category && joblist) {
        const titleJobs = await job_model_1.default.find({ title: joblist, category: category });
        const companyJobs = await job_model_1.default.find({
            companyName: joblist,
            category: category,
        });
        const allJobs = [...titleJobs, ...companyJobs];
        return res.status(200).json(allJobs);
    }
    else if (!joblist && category && city) {
        const allJobs = await job_model_1.default.find({ category: category, location: city });
        return res.status(200).json(allJobs);
    }
    else if (city && !joblist && !category) {
        const allJobs = await job_model_1.default.find({ location: city });
        return res.status(200).json(allJobs);
    }
    else if (joblist && !city && !category) {
        const titleJobs = await job_model_1.default.find({ title: joblist });
        const companyJobs = await job_model_1.default.find({ companyName: joblist });
        const allJobs = [...titleJobs, ...companyJobs];
        return res.status(200).json(allJobs);
    }
    else if (category && !city && !joblist) {
        const allJobs = await job_model_1.default.find({ category: category });
        return res.status(200).json(allJobs);
    }
    else {
        const allJobs = await job_model_1.default.find();
        return res.status(200).json(allJobs);
    }
});
exports.default = getJobs;
