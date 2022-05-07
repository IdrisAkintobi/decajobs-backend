"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jobSchema = new mongoose_1.default.Schema({
    user: {
        type: String,
    },
    category: {
        type: String,
        enum: ["Technology", "Finance", "Manufacturing", "Marketing"],
        required: [true, "Please enter job category"],
    },
    closeDate: {
        type: String,
        require: [true, "Please enter application closing date"],
    },
    companyName: {
        type: String,
        require: [true, "Please enter your company name"],
    },
    description: {
        type: String,
        require: [true, "Please add job description"],
    },
    email: {
        type: String,
        require: [true, "Please enter valid email address"],
    },
    location: {
        type: String,
        require: [true, "Please enter job location"],
    },
    salary: {
        type: String,
        require: [true, "Please enter salary amount"],
    },
    experience: {
        type: String,
        require: [true, "Please enter required years of experience"],
    },
    title: {
        type: String,
        require: [true, "Please enter job title"],
    },
    type: {
        type: String,
        require: [true, "Please enter job type"],
    },
    website: {
        type: String,
        require: [true, "Please enter company website"],
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Jobs", jobSchema);
