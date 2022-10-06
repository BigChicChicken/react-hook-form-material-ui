import {
  hasUppercase,
  hasLowercase,
  isEmail,
  isUrl,
  hasDigit,
  hasSpecialCharacter
} from '../../src/validators/validators'

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

  test('hasUppercase', () => {
    const values = {
      Test: true,
      tEst: true,
      teSt: true,
      tesT: true,
      test: false
    }

    Object.entries(values).forEach(([value, valueExpected]) => {
      expect(hasUppercase(value)).toBe(valueExpected)
    })
  })

  test('hasLowercase', () => {
    const values = {
      tEST: true,
      TeST: true,
      TEsT: true,
      TESt: true,
      TEST: false
    }

    Object.entries(values).forEach(([value, valueExpected]) => {
      expect(hasLowercase(value)).toBe(valueExpected)
    })
  })

  test('hasDigit', () => {
    const values = {
      test: false,
      test123: true
    }

    Object.entries(values).forEach(([value, valueExpected]) => {
      expect(hasDigit(value)).toBe(valueExpected)
    })
  })

  test('hasSpecialCharacter', () => {
    const values = {
      test: false,
      'test&': true,
      'test~': true,
      'test"': true,
      'test#': true,
      "test'": true,
      'test{': true,
      'test(': true,
      'test[': true,
      'test-': true,
      'test|': true,
      'test`': true,
      test_: true,
      'test\\': true,
      'test@': true,
      'test)': true,
      'test]': true,
      'test+': true,
      'test=': true,
      'test}': true,
      'test^': true,
      test$: true,
      'test%': true,
      'test*': true,
      'test?': true,
      'test,': true,
      'test.': true,
      'test;': true,
      'test/': true,
      'test:': true,
      'test!': true,
      'test<': true,
      'test>': true
    }

    Object.entries(values).forEach(([value, valueExpected]) => {
      expect(hasSpecialCharacter(value)).toBe(valueExpected)
    })
  })
})
