import { z } from 'zod'
import { ExternalDocumentation, ExternalDocumentationType } from './externalDocumentation'

export interface TagType {
  name: string
  description?: string
  externalDoc?: ExternalDocumentationType
}

export const Tag = z.object({
  name: z.string(),
  description: z.string().optional(),
  externalDoc: ExternalDocumentation.optional()
})
