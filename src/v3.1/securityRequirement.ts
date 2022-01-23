import { z } from 'zod'

export type SecurityRequirementType = Record<string, string[]>

export const SecurityRequirementModel: z.ZodSchema<SecurityRequirementType> = z.record(z.string().array())
