import { z } from 'zod'
import { OauthFlow, OauthFlowType } from './oauthFlow'

export interface OauthFlowsType {
  implicit?: OauthFlowType
  password?: OauthFlowType
  clientCredentials?: OauthFlowType
  authorizationCode?: OauthFlowType
}

export const OauthFlows: z.ZodSchema<OauthFlowsType> = z.object({
  implicit: OauthFlow.optional(),
  password: OauthFlow.optional(),
  clientCredentials: OauthFlow.optional(),
  authorizationCode: OauthFlow.optional()
})
