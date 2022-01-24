import { z } from 'zod'
import { Schema, SchemaType } from './schema'
import { Example, ExampleType } from './example'
import { Reference, ReferenceType } from './reference'
import { Encoding, EncodingType } from './encoding'

export interface MediaTypeType {
  schema?: SchemaType
  example?: any
  examples?: Record<string, ExampleType | ReferenceType>
  encoding?: Record<string, EncodingType>
}

export const MediaType: z.ZodSchema<MediaTypeType> = z.lazy(() => z.object({
  schema: Schema.optional(),
  example: z.any().optional(),
  examples: z.record(z.union([Example, Reference])).optional(),
  encoding: z.record(Encoding).optional()
}))
