import path from 'path'
import { Document } from '../../src/v3.1'
import { loadDirectory } from '../util'

describe('v3.1', () => {
  const contents: Array<[string, unknown]> = loadDirectory(path.resolve(__dirname, './resources'))
  test.each(contents)('Validate %s', (name, content) => {
    expect(() => Document.parse(content)).not.toThrow()
  })
})
