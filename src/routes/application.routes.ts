import { Router } from 'express';
import { createApplication } from '../controllers/application.controller';
import { validate } from '../middlewares/validate.middleware';
import { createApplicationSchema } from '../validations/application.validation';

const router = Router();

// Public as per spec
router.post('/', validate(createApplicationSchema), createApplication);

export default router;