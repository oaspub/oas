import { z } from 'zod'
import { PathItemModel, PathItemType } from './pathItem'
import { ReferenceModel, ReferenceType } from './reference'

export type CallbackType = Record<string, PathItemType | ReferenceType>

export const CallbackModel: z.ZodSchema<CallbackType> = z.lazy(() => z.record(z.union([PathItemModel, ReferenceModel])))
