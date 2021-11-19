import { isUrl } from './validators'

describe('Validators tests', () => {
  test('isUrl', () => {
    const urls = {
      'good.url.com': true
    }

    Object.entries(urls).forEach(([url, valueExpected]) => {
      expect(isUrl(url)).toBe(valueExpected)
    })
  })
})
