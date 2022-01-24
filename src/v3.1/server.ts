import { z } from 'zod'
import { ServerVariable, ServerVariableType } from './serverVariable'

export interface ServerType {
  url: string
  description?: string
  variables?: Record<string, ServerVariableType>
}

export const Server: z.ZodSchema<ServerType> = z.object({
  url: z.string(),
  description: z.string().optional(),
  variables: z.record(ServerVariable).optional()
})
