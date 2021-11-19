import { isEmail, isUrl } from './validators'

describe('Validators tests', () => {
  test('isEmail', () => {
    const emails = {
      'john.doe@email.com': true
    }

    Object.entries(emails).forEach(([email, valueExpected]) => {
      expect(isEmail(email)).toBe(valueExpected)
    })
  })

  test('isUrl', () => {
    const urls = {
      '127.0.0.1': true,
      'good.url.com': true,
      'http://good.url.com': true,
      'https://good.url.com': true,
      'root:root@good.url.com': true,
      'good.url.com:80': true,
      'good.url.com/target': true
    }

    Object.entries(urls).forEach(([url, valueExpected]) => {
      expect(isUrl(url)).toBe(valueExpected)
    })
  })
})
