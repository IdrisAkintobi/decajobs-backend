"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = exports.UserSchema = exports.ResumeZOdSchema = exports.JobZodSchema = void 0;
const zod_1 = require("zod");
const JobZodSchema = zod_1.z.object({
    category: zod_1.z.enum(["Technology", "Finance", "Manufacturing", "Marketing"]),
    closeDate: zod_1.z.string(),
    companyName: zod_1.z.string().min(2, { message: "Enter full company name" }),
    description: zod_1.z.string().min(30, {
        message: "Job description cannot be shorter than 30 characters",
    }),
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    location: zod_1.z.string(),
    salary: zod_1.z.string(),
    experience: zod_1.z.string(),
    title: zod_1.z.string({ required_error: "Enter job title" }),
    type: zod_1.z.string(),
    website: zod_1.z.string().url(),
});
exports.JobZodSchema = JobZodSchema;
const EduZodSchema = zod_1.z.object({
    schoolName: zod_1.z.string(),
    qualification: zod_1.z.string(),
    startDate: zod_1.z.string().optional(),
    endDate: zod_1.z.string().optional(),
});
const ExpZodSchema = zod_1.z.object({
    employer: zod_1.z.string().optional(),
    position: zod_1.z.string().optional(),
    startDate: zod_1.z.string().optional(),
    endDate: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
});
const ResumeZOdSchema = zod_1.z.object({
    FirstName: zod_1.z.string({ required_error: "FirstName is required" }),
    LastName: zod_1.z.string({ required_error: "LastName is required" }),
    dob: zod_1.z.string({ required_error: "Enter date of birth" }),
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    gender: zod_1.z.string(),
    location: zod_1.z.string(),
    objective: zod_1.z.string({ required_error: "Resume objective is required" }),
    phone: zod_1.z.string(),
    title: zod_1.z.string({ required_error: "Enter preferred tittle" }),
    website: zod_1.z.string().optional(),
    skills: zod_1.z.string().array(),
    experience: ExpZodSchema.optional(),
    education: EduZodSchema,
});
exports.ResumeZOdSchema = ResumeZOdSchema;
const UserSchema = zod_1.z.object({
    role: zod_1.z.enum(["Recruiter", "Applicant"]),
    fullName: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
});
exports.UserSchema = UserSchema;
const LoginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
});
exports.LoginSchema = LoginSchema;
