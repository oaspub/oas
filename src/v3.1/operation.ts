import { z } from 'zod'
import { ExternalDocumentationModel, ExternalDocumentationType } from './externalDocumentation'
import { ParameterModel, ParameterType } from './parameter'
import { ReferenceModel, ReferenceType } from './reference'
import { RequestBodyModel, RequestBodyType } from './requestBody'
import { ResponsesModel, ResponsesType } from './responses'
import { CallbackModel, CallbackType } from './callback'
import { SecurityRequirementModel, SecurityRequirementType } from './securityRequirement'
import { ServerModel, ServerType } from './server'

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

export const OperationModel: z.ZodSchema<OperationType> = z.lazy(() => z.object({
  tags: z.string().array().optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  externalDocs: ExternalDocumentationModel.optional(),
  operationId: z.string().optional(),
  parameters: z.union([ParameterModel, ReferenceModel]).array().optional(),
  requestBody: z.union([RequestBodyModel, ReferenceModel]).optional(),
  responses: ResponsesModel.optional(),
  callbacks: CallbackModel.optional(),
  deprecated: z.boolean().default(false),
  security: SecurityRequirementModel.array().optional(),
  servers: ServerModel.array().optional()
}))
