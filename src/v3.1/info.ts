import { z } from 'zod'
import { Contact, ContactType } from './contact'
import { License, LicenseType } from './license'

const semanticVersionRx = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/

export interface InfoType {
  title: string
  summary?: string
  description?: string
  termsOfService?: string
  contact?: ContactType
  license?: LicenseType
  version: string
}

export const Info: z.ZodSchema<InfoType> = z.object({
  title: z.string(),
  summary: z.string().optional(),
  description: z.string().optional(),
  termsOfService: z.string().url().optional(),
  contact: Contact.optional(),
  license: License.optional(),
  version: z.string().regex(semanticVersionRx, 'Version must follow the semantic version specification')
})
