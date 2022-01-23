import { z } from 'zod'

export interface ContactType {
  name?: string
  url?: string
  email?: string
}

export const Contact: z.ZodSchema<ContactType> = z.object({
  name: z.string().optional(),
  url: z.string().url().optional(),
  email: z.string().email().optional()
})
