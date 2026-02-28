import { z } from 'zod';

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export const createApplicationSchema = z.object({
  jobId: z.string().regex(objectIdRegex, 'Invalid Job ID'),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email format'),
  resumeLink: z.string().url('Resume link must be a valid URL'),
  coverNote: z.string().optional(),
});