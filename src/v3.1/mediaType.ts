import { z } from 'zod'
import { SchemaModel, SchemaType } from './schema'
import { ExampleModel, ExampleType } from './example'
import { ReferenceModel, ReferenceType } from './reference'
import { EncodingModel, EncodingType } from './encoding'

export interface MediaTypeType {
  schema?: SchemaType
  example?: any
  examples?: Record<string, ExampleType | ReferenceType>
  encoding?: Record<string, EncodingType>
}

export const MediaTypeModel: z.ZodSchema<MediaTypeType> = z.lazy(() => z.object({
  schema: SchemaModel.optional(),
  example: z.any().optional(),
  examples: z.record(z.union([ExampleModel, ReferenceModel])).optional(),
  encoding: z.record(EncodingModel).optional()
}))
