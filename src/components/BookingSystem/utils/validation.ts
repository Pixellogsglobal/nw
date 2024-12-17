import { z } from 'zod';

export const userDetailsSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  educationLevel: z.string().min(1, 'Education level is required'),
  targetUniversity: z.string().optional(),
  desiredCourse: z.string().optional(),
  additionalNotes: z.string().optional()
});

export const validateUserDetails = (data: unknown) => {
  return userDetailsSchema.safeParse(data);
};