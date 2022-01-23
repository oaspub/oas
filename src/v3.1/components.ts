import { z } from 'zod'
import { Schema, SchemaType } from './schema'
import { Reference, ReferenceType } from './reference'
import { Response, ResponseType } from './response'
import { Parameter, ParameterType } from './parameter'
import { Example, ExampleType } from './example'
import { RequestBody, RequestBodyType } from './requestBody'
import { Header, HeaderType } from './header'
import { SecurityScheme, SecuritySchemeType } from './securityScheme'
import { Link, LinkType } from './link'
import { Callback, CallbackType } from './callback'
import { PathItem, PathItemType } from './pathItem'

type ComponentTypeMember<T> = Record<string, T | ReferenceType>

export interface ComponentsType {
  schemas?: Record<string, SchemaType>
  responses?: ComponentTypeMember<ResponseType>
  parameters?: ComponentTypeMember<ParameterType>
  examples?: ComponentTypeMember<ExampleType>
  requestBodies?: ComponentTypeMember<RequestBodyType>
  headers?: ComponentTypeMember<HeaderType>
  securitySchemes?: ComponentTypeMember<SecuritySchemeType>
  links?: ComponentTypeMember<LinkType>
  callbacks?: ComponentTypeMember<CallbackType>
  pathItems?: ComponentTypeMember<PathItemType>
}

export const Components: z.ZodSchema<ComponentsType> = z.object({
  schemas: z.record(Schema).optional(),
  responses: z.record(z.union([Response, Reference])).optional(),
  parameters: z.record(z.union([Parameter, Reference])).optional(),
  examples: z.record(z.union([Example, Reference])).optional(),
  requestBodies: z.record(z.union([RequestBody, Reference])).optional(),
  headers: z.record(z.union([Header, Reference])).optional(),
  securitySchemes: z.record(z.union([SecurityScheme, Reference])).optional(),
  links: z.record(z.union([Link, Reference])).optional(),
  callbacks: z.record(z.union([Callback, Reference])).optional(),
  pathItems: z.record(z.union([PathItem, Reference])).optional()
})

/*
TODO: All the fixed fields declared above are objects that MUST use keys that match the regular expression: ^[a-zA-Z0-9\.\-_]+$.
Field Name Examples:

User
User_1
User_Name
user-name
my.org.User
*/
