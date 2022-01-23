import { Document } from '../../src/v3.1'
import WebhookExample from './resources/webhook-example.json'

describe('v3.1', () => {
  test('Parses webhook example', () => {
    expect(() => Document.parse(WebhookExample)).not.toThrow()
  })
})
