import { z } from 'zod'

export interface ReferenceType {
  $ref: string
}

export const ReferenceModel = z.object({
  $ref: z.string()
})
