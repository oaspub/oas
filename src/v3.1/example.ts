import { z } from 'zod'

export type ExampleType = {
  summary?: string
  description?: string
} & ({
  value?: any
} | {
  externalValue?: string
})

export const ExampleModel: z.ZodSchema<ExampleType> = z.intersection(
  z.object({
    summary: z.string().optional(),
    description: z.string().optional()
  }),
  z.union([
    z.object({
      value: z.any().optional()
    }),
    z.object({
      externalValue: z.string().url().optional()
    })
  ]))
