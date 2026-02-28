"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = require("./routes/auth.routes");
const job_routes_1 = require("./routes/job.routes");
const application_routes_1 = require("./routes/application.routes");
const error_middleware_1 = require("./middlewares/error.middleware");
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send('Welcome to the QuickHire API!');
});
// Routes
app.use('/api/auth', auth_routes_1.authRoutes);
app.use('/api/jobs', job_routes_1.jobRoutes);
app.use('/api/applications', application_routes_1.applicationRoutes);
// 404 Handler
app.use((_req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});
// Global error handler
app.use(error_middleware_1.errorHandler);
exports.default = app;
