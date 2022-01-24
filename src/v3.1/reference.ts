import { z } from 'zod'

export interface ReferenceType {
  $ref: string
}

export const Reference = z.object({
  $ref: z.string()
})
