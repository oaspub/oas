import { z } from 'zod'
import { Server, ServerType } from './server'

export interface LinkType {
  operationRef?: string
  operationId?: string
  parameters?: Record<string, any>
  requestBody?: any
  description?: string
  server?: ServerType
}

export const Link: z.ZodSchema<LinkType> = z.object({
  operationRef: z.string().optional(),
  operationId: z.string().optional(),
  parameters: z.record(z.any()).optional(),
  requestBody: z.any().optional(),
  description: z.string().optional(),
  server: Server.optional()
})
