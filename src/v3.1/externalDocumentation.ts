import { z } from 'zod'

export interface ExternalDocumentationType {
  description?: string
  url: string
}

export const ExternalDocumentationModel: z.ZodSchema<ExternalDocumentationType> = z.object({
  description: z.string().optional(),
  url: z.string().url()
})
