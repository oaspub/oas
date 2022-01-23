import { z } from 'zod'
import { HeaderModel, HeaderType } from './header'
import { ReferenceModel, ReferenceType } from './reference'
import { MediaTypeModel, MediaTypeType } from './mediaType'
import { LinkModel, LinkType } from './link'

export interface ResponseType {
  description: string
  headers?: HeaderType | ReferenceType
  content?: Record<string, MediaTypeType>
  links?: Record<string, LinkType | ReferenceType>
}

export const ResponseModel: z.ZodSchema<ResponseType> = z.object({
  description: z.string(),
  headers: z.union([HeaderModel, ReferenceModel]).optional(),
  content: z.record(MediaTypeModel).optional(),
  links: z.record(z.union([LinkModel, ReferenceModel])).optional()
})
