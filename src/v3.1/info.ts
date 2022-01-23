import { z } from 'zod'
import { ContactModel, ContactType } from './contact'
import { LicenseModel, LicenseType } from './license'

const semanticVersionRx = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/

export interface InfoType {
  title: string
  summary: string
  description: string
  termsOfService: string
  contact: ContactType
  license: LicenseType
  version: string
}

export const InfoModel: z.ZodSchema<InfoType> = z.object({
  title: z.string(),
  summary: z.string(),
  description: z.string(),
  termsOfService: z.string().url(),
  contact: ContactModel,
  license: LicenseModel,
  version: z.string().regex(semanticVersionRx, 'Version must follow the semantic version specification')
})
