import { z } from 'zod'

/**
 * Common form schemas using Zod
 * Source of truth for validation across client and server
 */

// Email validation
export const emailSchema = z.string().email('Invalid email address')

// Password validation (strong)
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')

// Password validation (basic)
export const basicPasswordSchema = z.string().min(6, 'Password must be at least 6 characters')

// Username validation
export const usernameSchema = z
  .string()
  .min(3, 'Username must be at least 3 characters')
  .max(20, 'Username must be at most 20 characters')
  .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and hyphens')

// Common login schema
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
})
export type LoginFormData = z.infer<typeof loginSchema>

// Common signup schema
export const signupSchema = z.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})
export type SignupFormData = z.infer<typeof signupSchema>

// Common profile update schema
export const profileSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  bio: z.string().max(500, 'Bio is too long').optional(),
  avatar: z.string().url('Invalid avatar URL').optional(),
})
export type ProfileFormData = z.infer<typeof profileSchema>
