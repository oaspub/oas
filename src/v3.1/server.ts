import { z } from 'zod'
import { ServerVariableModel, ServerVariableType } from './serverVariable'

export interface ServerType {
  url: string
  description?: string
  variables: Record<string, ServerVariableType>
}

export const ServerModel: z.ZodSchema<ServerType> = z.object({
  url: z.string().url(),
  description: z.string().optional(),
  variables: z.record(ServerVariableModel)
})
