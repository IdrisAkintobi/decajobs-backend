"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Education = new mongoose_1.default.Schema({
    schoolName: String,
    qualification: String,
    startDate: String,
    endDate: String,
});
const Experience = new mongoose_1.default.Schema({
    employer: String,
    position: String,
    startDate: String,
    endDate: String,
    description: String,
});
const ResumeSchema = new mongoose_1.default.Schema({
    poster: {
        type: String,
    },
    title: {
        type: String,
        required: [true, "Please enter your preferred title"],
    },
    LastName: {
        type: String,
        required: [true, "Please enter your last name"],
    },
    FirstName: {
        type: String,
        required: [true, "Please enter your first name"],
    },
    email: {
        type: String,
        required: [true, "Please enter valid email"],
    },
    objective: {
        type: String,
        required: [true, "Please enter your resume objective"],
    },
    phone: {
        type: String,
        required: [true, "Please enter your phone number"],
    },
    gender: {
        type: String,
        required: [true, "Please enter your gender"],
    },
    location: {
        type: String,
        required: [true, "Please enter your location"],
    },
    dob: {
        type: String,
        required: [true, "Please enter your date of birth"],
    },
    website: {
        type: String,
    },
    skills: {
        type: [String],
    },
    education: {},
    experience: {},
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Resume", ResumeSchema);
