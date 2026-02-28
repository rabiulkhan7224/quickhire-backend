import { Request, Response } from 'express';
import Application from '../models/application.model';
import Job from '../models/job.model';

export const createApplication = async (req: Request, res: Response) => {
  try {
    const { jobId, ...rest } = req.body;

    const jobExists = await Job.findById(jobId);
    if (!jobExists) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    const application = await Application.create({
      job: jobId,
      ...rest,
    });

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: application,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};