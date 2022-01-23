import { z } from 'zod'
import { SchemaModel, SchemaType } from './schema'
import { ExampleModel, ExampleType } from './example'
import { ReferenceModel, ReferenceType } from './reference'

export interface ParameterType {
  name: string
  in: 'query' | 'header' | 'path' | 'cookie'
  description?: string
  required?: boolean
  deprecated?: boolean
  allowEmptyValue?: boolean
  style?: 'form' | 'simple'
  explode?: boolean
  allowReserved?: boolean
  schema?: SchemaType
  example?: any
  examples?: Record<string, ExampleType | ReferenceType>
}

export const ParameterModel: z.ZodSchema<ParameterType> = z.lazy(() => z.object({
  name: z.string(),
  in: z.enum(['query', 'header', 'path', 'cookie']),
  description: z.string().optional(),
  required: z.boolean().default(false),
  deprecated: z.boolean().default(false),
  allowEmptyValue: z.boolean().default(false),
  style: z.enum(['form', 'simple']).default('simple'),
  explode: z.boolean().default(false),
  allowReserved: z.boolean().default(false),
  schema: SchemaModel.optional(),
  example: z.any().optional(),
  examples: z.record(z.union([ExampleModel, ReferenceModel])).optional()
}))
