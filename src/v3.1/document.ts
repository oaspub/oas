import { z } from 'zod'
import { InfoModel, InfoType } from './info'
import { ServerModel, ServerType } from './server'
import { PathItemModel, PathItemType } from './pathItem'
import { ReferenceModel, ReferenceType } from './reference'
import { ComponentsModel, ComponentsType } from './components'
import { SecurityRequirementModel, SecurityRequirementType } from './securityRequirement'
import { TagModel, TagType } from './tag'
import { ExternalDocumentationModel, ExternalDocumentationType } from './externalDocumentation'

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

export const DocumentModel: z.ZodSchema<DocumentType> = z.object({
  openapi: z.literal('3.1.0'),
  info: InfoModel,
  jsonSchemaDialect: z.string().url().optional(),
  servers: ServerModel.array().optional(),
  paths: z.record(PathItemModel).optional(),
  webhooks: z.record(z.union([PathItemModel, ReferenceModel])).optional(),
  components: ComponentsModel.optional(),
  security: SecurityRequirementModel.array().optional(),
  tags: TagModel.array().optional(),
  externalDocs: ExternalDocumentationModel.optional()
})
