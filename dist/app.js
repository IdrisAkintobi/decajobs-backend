"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const jobs_routes_1 = __importDefault(require("./routes/jobs.routes"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const db_1 = __importDefault(require("./config/db"));
const errorhandler_1 = __importDefault(require("./middleware/errorhandler"));
// Connect to the database
(0, db_1.default)();
// Initiate express, activate the json middleware and set PORT
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_1.json)());
const PORT = process.env.PORT || 5000;
app.use("/api/jobs", jobs_routes_1.default);
app.use("/api/user", user_route_1.default);
app.use(() => {
    throw new Error("End point not set");
});
app.use(errorhandler_1.default);
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
