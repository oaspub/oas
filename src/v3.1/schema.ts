import { z } from 'zod'

export type SchemaType = unknown

export const Schema: z.ZodSchema<SchemaType> = z.unknown()
