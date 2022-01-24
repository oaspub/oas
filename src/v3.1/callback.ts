import { z } from 'zod'
import { PathItem, PathItemType } from './pathItem'
import { Reference, ReferenceType } from './reference'

export type CallbackType = Record<string, PathItemType | ReferenceType>

export const Callback: z.ZodSchema<CallbackType> = z.lazy(() => z.record(z.union([PathItem, Reference])))
