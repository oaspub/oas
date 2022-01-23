import { z } from 'zod'

export type LicenseType = {
  name: string
} & ({
  identifier?: string
} | {
  url?: string
})

export const License: z.ZodSchema<LicenseType> = z.intersection(z.object({ name: z.string() }),
  z.union([
    z.object({
      identifier: z.string().optional()
    }),
    z.object({
      url: z.string().url().optional()
    })
  ]))
