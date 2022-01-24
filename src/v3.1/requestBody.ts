import { z } from 'zod'
import { MediaType, MediaTypeType } from './mediaType'

export interface RequestBodyType {
  description?: string
  content: Record<string, MediaTypeType>
  required?: boolean
}

export const RequestBody: z.ZodSchema<RequestBodyType> = z.lazy(() => z.object({
  description: z.string().optional(),
  content: z.record(MediaType),
  required: z.boolean().default(false)
}))
