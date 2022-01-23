import { z } from 'zod'
import { ParameterType } from './parameter'
import { SchemaModel } from './schema'
import { ExampleModel } from './example'
import { ReferenceModel } from './reference'

export type HeaderType = Omit<ParameterType, 'name' | 'in'>

export const HeaderModel: z.ZodSchema<HeaderType> = z.lazy(() => z.object({
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
