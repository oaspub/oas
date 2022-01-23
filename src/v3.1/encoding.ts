import { z } from 'zod'
import { Header, HeaderType } from './header'
import { Reference, ReferenceType } from './reference'

export interface EncodingType {
  contentType?: string
  headers?: Record<string, HeaderType | ReferenceType>
  style?: string
  explode?: boolean
  allowReserved?: boolean
}

export const Encoding: z.ZodSchema<EncodingType> = z.lazy(() => z.object({
  contentType: z.string().optional(),
  headers: z.record(z.union([Header, Reference])).optional(),
  style: z.string().default('form'),
  explode: z.boolean().default(true),
  allowReserved: z.boolean().default(false)
}))
