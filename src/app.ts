import express from 'express';
import cors from 'cors';
import { authRoutes } from './routes/auth.routes';
import { jobRoutes } from './routes/job.routes';
import { applicationRoutes } from './routes/application.routes';
import { errorHandler } from './middlewares/error.middleware';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.get('/', (_req, res) => {
  res.send('Welcome to the QuickHire API!');
});
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);

// 404 Handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global error handler
app.use(errorHandler);



export default app;