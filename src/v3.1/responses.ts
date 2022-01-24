import { STATUS_CODES } from 'http'
import { z } from 'zod'
import { Response, ResponseType } from './response'
import { Reference, ReferenceType } from './reference'

export type ResponsesType = Record<string, ResponseType | ReferenceType>

export const Responses: z.ZodSchema<ResponsesType> = z.record(z.union([Response, Reference])).refine((obj) => {
  return Object.keys(obj).length > 0
}, {
  message: 'Responses Object must contain at least one entry'
}).refine((obj) => {
  return Object.keys(obj).every(key => STATUS_CODES[key] !== undefined || key === 'default')
}, {
  message: 'Responses Object must be HTTP Status Codes or "default"'
})
