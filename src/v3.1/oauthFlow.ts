import { z } from 'zod'

export interface OauthFlowType {
  authorizationUrl: string
  tokenUrl: string
  refreshUrl?: string
  scopes: Record<string, string[]>
}

export const OauthFlow: z.ZodSchema<OauthFlowType> = z.object({
  authorizationUrl: z.string().url(),
  tokenUrl: z.string().url(),
  refreshUrl: z.string().url().optional(),
  scopes: z.record(z.string().array())
})
