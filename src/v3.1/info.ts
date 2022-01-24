import { z } from 'zod'
import { Contact, ContactType } from './contact'
import { License, LicenseType } from './license'
import { semver } from '../util/rx'

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
  version: z.string().regex(semver, 'Version must follow the semantic version specification')
})
