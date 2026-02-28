
import { Request, Response, NextFunction } from 'express';
import { z,  } from 'zod';

export const validate = <T>(schema: z.ZodSchema<T>) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
    //   if (error instanceof ZodError) {
    //     return res.status(400).json({
    //       success: false,
    //       message: 'Validation error',
    //       errors: error.errors.map((err) => ({
    //         field: err.path.join('.'),
    //         message: err.message,
    //       })),
    //     });
    //   }
      next(error);
    }
  };
};