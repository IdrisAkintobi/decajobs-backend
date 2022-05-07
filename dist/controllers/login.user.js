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
const loginUser = (0, express_async_handler_1.default)(async (req, res) => {
    const data = req.body;
    zod_schemas_1.LoginSchema.parse(data);
    const { email, password } = data;
    const user = await users_model_1.default.findOne({ email });
    if (user && (await bcryptjs_1.default.compare(password, user.password))) {
        const { id, fullName: name, email, role } = user;
        res.status(200).json({ id, name, email, role, token: (0, basic_utils_1.genToken)(id) });
    }
    else {
        res.status(400);
        throw new Error("Invalid credentials");
    }
});
exports.default = loginUser;
