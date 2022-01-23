import { z } from 'zod'
import { OauthFlowsModel, OauthFlowsType } from './oauthFlows'

export interface SecuritySchemeType {
  type: 'apiKey' | 'http' | 'mutualTLS' | 'oauth2' | 'openIdConnect'
  description?: string
  name: string
  in: string
  scheme: string
  bearerFormat: string
  flows: OauthFlowsType
  openIdConnectUrl: string
}

export const SecuritySchemeModel: z.ZodSchema<SecuritySchemeType> = z.object({
  type: z.enum(['apiKey', 'http', 'mutualTLS', 'oauth2', 'openIdConnect']),
  description: z.string().optional(),
  name: z.string(),
  in: z.string(),
  scheme: z.string(),
  bearerFormat: z.string(),
  flows: OauthFlowsModel,
  openIdConnectUrl: z.string().url()
})
