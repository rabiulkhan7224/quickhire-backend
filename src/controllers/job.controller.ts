import { Request, Response } from 'express';
import Job from '../models/job.model';

export const getAllJobs = async (_req: Request, res: Response) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json({ success: true, count: jobs.length, data: jobs });
};

export const getJobById = async (req: Request, res: Response) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
  res.json({ success: true, data: job });
};

export const createJob = async (req: Request, res: Response) => {
  const job = await Job.create(req.body);
  res.status(201).json({ success: true, data: job });
};

export const deleteJob = async (req: Request, res: Response) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
  res.json({ success: true, message: 'Job deleted successfully' });
};