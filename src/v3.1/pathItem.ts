import { z } from 'zod'
import { ReferenceModel, ReferenceType } from './reference'
import { ServerModel, ServerType } from './server'
import { ParameterModel, ParameterType } from './parameter'
import { OperationModel, OperationType } from './operation'

export interface PathItemType {
  $ref?: ReferenceType
  summary?: string
  description?: string
  get?: OperationType
  put?: OperationType
  post?: OperationType
  delete?: OperationType
  options?: OperationType
  head?: OperationType
  patch?: OperationType
  trace?: OperationType
  servers?: ServerType[]
  parameters?: Array<ParameterType | ReferenceType>
}

export const PathItemModel: z.ZodSchema<PathItemType> = z.lazy(() => z.object({
  $ref: ReferenceModel.optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  get: OperationModel.optional(),
  put: OperationModel.optional(),
  post: OperationModel.optional(),
  delete: OperationModel.optional(),
  options: OperationModel.optional(),
  head: OperationModel.optional(),
  patch: OperationModel.optional(),
  trace: OperationModel.optional(),
  servers: ServerModel.array().optional(),
  parameters: z.union([ParameterModel, ReferenceModel]).array().optional()
}))
