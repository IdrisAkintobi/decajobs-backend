"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
function errorHandler(err, req, res) {
    const statusCode = res.statusCode || 500;
    res.status(statusCode);
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json(err.issues);
    }
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
}
exports.default = errorHandler;
