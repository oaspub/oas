import { z } from 'zod'
import { HeaderModel, HeaderType } from './header'
import { ReferenceModel, ReferenceType } from './reference'

export interface EncodingType {
  contentType?: string
  headers?: Record<string, HeaderType | ReferenceType>
  style?: string
  explode?: boolean
  allowReserved?: boolean
}

export const EncodingModel: z.ZodSchema<EncodingType> = z.lazy(() => z.object({
  contentType: z.string().optional(),
  headers: z.record(z.union([HeaderModel, ReferenceModel])).optional(),
  style: z.string().default('form'),
  explode: z.boolean().default(true),
  allowReserved: z.boolean().default(false)
}))
