import { Router } from 'express';
import {
  getAllJobs,
  getJobById,
  createJob,
  deleteJob,
} from '../controllers/job.controller';
import { validate } from '../middlewares/validate.middleware';
import { createJobSchema } from '../validations/job.validation';
import { authMiddleware } from '../middlewares/auth.middleware';
import { adminOnly } from '../middlewares/role.middleware';

const router = Router();

router.get('/', getAllJobs);
router.get('/:id', getJobById);

// Admin only
router.post('/', authMiddleware, adminOnly, validate(createJobSchema), createJob);
router.delete('/:id', authMiddleware, adminOnly, deleteJob);

export const jobRoutes= router;