import { z } from 'zod'
import { MediaTypeModel, MediaTypeType } from './mediaType'

export interface RequestBodyType {
  description?: string
  content: Record<string, MediaTypeType>
  required?: boolean
}

export const RequestBodyModel: z.ZodSchema<RequestBodyType> = z.lazy(() => z.object({
  description: z.string().optional(),
  content: z.record(MediaTypeModel),
  required: z.boolean().default(false)
}))
