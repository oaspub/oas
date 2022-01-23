import { z } from 'zod'
import { OauthFlowModel, OauthFlowType } from './oauthFlow'

export interface OauthFlowsType {
  implicit?: OauthFlowType
  password?: OauthFlowType
  clientCredentials?: OauthFlowType
  authorizationCode?: OauthFlowType
}

export const OauthFlowsModel: z.ZodSchema<OauthFlowsType> = z.object({
  implicit: OauthFlowModel.optional(),
  password: OauthFlowModel.optional(),
  clientCredentials: OauthFlowModel.optional(),
  authorizationCode: OauthFlowModel.optional()
})
