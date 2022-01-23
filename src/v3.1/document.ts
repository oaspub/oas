import { z } from 'zod'
import { Info, InfoType } from './info'
import { Server, ServerType } from './server'
import { PathItem, PathItemType } from './pathItem'
import { Reference, ReferenceType } from './reference'
import { Components, ComponentsType } from './components'
import { SecurityRequirement, SecurityRequirementType } from './securityRequirement'
import { Tag, TagType } from './tag'
import { ExternalDocumentation, ExternalDocumentationType } from './externalDocumentation'

export interface DocumentType {
  openapi: '3.1.0'
  info: InfoType
  jsonSchemaDialect?: string
  servers?: ServerType[]
  paths?: Record<string, PathItemType>
  webhooks?: Record<string, PathItemType | ReferenceType>
  components?: ComponentsType
  security?: SecurityRequirementType[]
  tags?: TagType[]
  externalDocs?: ExternalDocumentationType
}

export const Document: z.ZodSchema<DocumentType> = z.object({
  openapi: z.literal('3.1.0'),
  info: Info,
  jsonSchemaDialect: z.string().url().optional(),
  servers: Server.array().optional(),
  paths: z.record(PathItem).optional(),
  webhooks: z.record(z.union([PathItem, Reference])).optional(),
  components: Components.optional(),
  security: SecurityRequirement.array().optional(),
  tags: Tag.array().optional(),
  externalDocs: ExternalDocumentation.optional()
})
