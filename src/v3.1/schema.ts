import { z } from 'zod'

// TODO: JSON Schema definition
export type SchemaType = any

export const Schema: z.ZodSchema<SchemaType> = z.any()
