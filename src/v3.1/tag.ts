import { z } from 'zod'
import { ExternalDocumentationModel, ExternalDocumentationType } from './externalDocumentation'

export interface TagType {
  name: string
  description?: string
  externalDoc?: ExternalDocumentationType
}

export const TagModel = z.object({
  name: z.string(),
  description: z.string().optional(),
  externalDoc: ExternalDocumentationModel.optional()
})
