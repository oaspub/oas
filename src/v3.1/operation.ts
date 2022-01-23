import { z } from 'zod'
import { ExternalDocumentation, ExternalDocumentationType } from './externalDocumentation'
import { Parameter, ParameterType } from './parameter'
import { Reference, ReferenceType } from './reference'
import { RequestBody, RequestBodyType } from './requestBody'
import { Responses, ResponsesType } from './responses'
import { Callback, CallbackType } from './callback'
import { SecurityRequirement, SecurityRequirementType } from './securityRequirement'
import { Server, ServerType } from './server'

export interface OperationType {
  tags?: string[]
  summary?: string
  description?: string
  externalDocs?: ExternalDocumentationType
  operationId?: string
  parameters?: Array<ParameterType | ReferenceType>
  requestBody?: RequestBodyType | ReferenceType
  responses?: ResponsesType
  callbacks?: CallbackType
  deprecated?: boolean
  security?: SecurityRequirementType[]
  servers?: ServerType[]
}

export const Operation: z.ZodSchema<OperationType> = z.lazy(() => z.object({
  tags: z.string().array().optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  externalDocs: ExternalDocumentation.optional(),
  operationId: z.string().optional(),
  parameters: z.union([Parameter, Reference]).array().optional(),
  requestBody: z.union([RequestBody, Reference]).optional(),
  responses: Responses.optional(),
  callbacks: Callback.optional(),
  deprecated: z.boolean().default(false),
  security: SecurityRequirement.array().optional(),
  servers: Server.array().optional()
}))
