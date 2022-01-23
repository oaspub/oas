import { z } from 'zod'
import { ParameterType } from './parameter'
import { Schema } from './schema'
import { Example } from './example'
import { Reference } from './reference'

export type HeaderType = Omit<ParameterType, 'name' | 'in'>

export const Header: z.ZodSchema<HeaderType> = z.lazy(() => z.object({
  description: z.string().optional(),
  required: z.boolean().default(false),
  deprecated: z.boolean().default(false),
  allowEmptyValue: z.boolean().default(false),
  style: z.enum(['form', 'simple']).default('simple'),
  explode: z.boolean().default(false),
  allowReserved: z.boolean().default(false),
  schema: Schema.optional(),
  example: z.any().optional(),
  examples: z.record(z.union([Example, Reference])).optional()
}))
