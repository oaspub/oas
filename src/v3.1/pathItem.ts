import { z } from 'zod'
import { Reference, ReferenceType } from './reference'
import { Server, ServerType } from './server'
import { Parameter, ParameterType } from './parameter'
import { Operation, OperationType } from './operation'

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

export const PathItem: z.ZodSchema<PathItemType> = z.lazy(() => z.object({
  $ref: Reference.optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  get: Operation.optional(),
  put: Operation.optional(),
  post: Operation.optional(),
  delete: Operation.optional(),
  options: Operation.optional(),
  head: Operation.optional(),
  patch: Operation.optional(),
  trace: Operation.optional(),
  servers: Server.array().optional(),
  parameters: z.union([Parameter, Reference]).array().optional()
}))
