import { z } from 'zod'

export interface ServerVariableType {
  enum?: string[]
  default: string
  description?: string
}

export const ServerVariable: z.ZodSchema<ServerVariableType> = z.object({
  enum: z.string().array().optional(),
  default: z.string(),
  description: z.string().optional()
})
