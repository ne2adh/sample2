"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.pool = (0, promise_1.createPool)({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5555,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "agenda_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
//# sourceMappingURL=config.js.map