"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = __importDefault(require("../model/users.model"));
const zod_schemas_1 = require("../config/zod.schemas");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const basic_utils_1 = require("../config/basic.utils");
const createUser = (0, express_async_handler_1.default)(async (req, res) => {
    const data = req.body;
    zod_schemas_1.UserSchema.parse(data);
    const { email, password } = data;
    //Throw error if user already exist
    const userExists = await users_model_1.default.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exist");
    }
    //Hash password
    const salt = await bcryptjs_1.default.genSalt(10);
    const hashedPass = await bcryptjs_1.default.hash(password, salt);
    //Write the data with hashed password to database
    const securedData = { ...data, password: hashedPass };
    const user = await users_model_1.default.create(securedData);
    if (user) {
        const { id, fullName: name, email, role } = user;
        res.status(201).json({ id, name, email, role, token: (0, basic_utils_1.genToken)(id) });
    }
    else {
        res.status(400);
        throw new Error("User not created");
    }
});
exports.default = createUser;
