"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function genToken(id) {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET);
}
exports.genToken = genToken;
