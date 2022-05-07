"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const users_model_1 = __importDefault(require("../model/users.model"));
const authenticate = (0, express_async_handler_1.default)(async (req, res, next) => {
    const auth = req.headers.authorization;
    if (auth && auth.startsWith("Bearer")) {
        try {
            const token = auth.split(" ")[1];
            //Verify token
            const decrypted = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            //Add user to request body excluding hashed password
            req.user = await users_model_1.default.findById(decrypted).select("-password");
            next();
        }
        catch (err) {
            console.log(err);
            res.status(401);
            throw new Error("Invalid token");
        }
    }
    else {
        res.status(401);
        throw new Error("Token not found");
    }
});
exports.authenticate = authenticate;
