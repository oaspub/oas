import { z } from 'zod'
import { Header, HeaderType } from './header'
import { Reference, ReferenceType } from './reference'
import { MediaType, MediaTypeType } from './mediaType'
import { Link, LinkType } from './link'

export interface ResponseType {
  description: string
  headers?: HeaderType | ReferenceType
  content?: Record<string, MediaTypeType>
  links?: Record<string, LinkType | ReferenceType>
}

export const Response: z.ZodSchema<ResponseType> = z.object({
  description: z.string(),
  headers: z.union([Header, Reference]).optional(),
  content: z.record(MediaType).optional(),
  links: z.record(z.union([Link, Reference])).optional()
})
