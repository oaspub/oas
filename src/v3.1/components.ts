import { z } from 'zod'
import { SchemaModel, SchemaType } from './schema'
import { ReferenceModel, ReferenceType } from './reference'
import { ResponseModel, ResponseType } from './response'
import { ParameterModel, ParameterType } from './parameter'
import { ExampleModel, ExampleType } from './example'
import { RequestBodyModel, RequestBodyType } from './requestBody'
import { HeaderModel, HeaderType } from './header'
import { SecuritySchemeModel, SecuritySchemeType } from './securityScheme'
import { LinkModel, LinkType } from './link'
import { CallbackModel, CallbackType } from './callback'
import { PathItemModel, PathItemType } from './pathItem'

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

export const ComponentsModel: z.ZodSchema<ComponentsType> = z.object({
  schemas: z.record(SchemaModel).optional(),
  responses: z.record(z.union([ResponseModel, ReferenceModel])).optional(),
  parameters: z.record(z.union([ParameterModel, ReferenceModel])).optional(),
  examples: z.record(z.union([ExampleModel, ReferenceModel])).optional(),
  requestBodies: z.record(z.union([RequestBodyModel, ReferenceModel])).optional(),
  headers: z.record(z.union([HeaderModel, ReferenceModel])).optional(),
  securitySchemes: z.record(z.union([SecuritySchemeModel, ReferenceModel])).optional(),
  links: z.record(z.union([LinkModel, ReferenceModel])).optional(),
  callbacks: z.record(z.union([CallbackModel, ReferenceModel])).optional(),
  pathItems: z.record(z.union([PathItemModel, ReferenceModel])).optional()
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
