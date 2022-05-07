"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    role: {
        type: String,
        enum: ["Applicant", "Recruiter"],
        required: [true, "Enter your full name"],
    },
    fullName: {
        type: String,
        required: [true, "Enter your full name"],
    },
    email: {
        type: String,
        required: [true, "Enter valid email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Enter a password"],
    },
    applied: [String],
    posted: [String],
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("User", UserSchema);
