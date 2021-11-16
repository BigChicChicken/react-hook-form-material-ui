import {
  Form,
  Select,
  TextField,
  UrlTextField,
  withForm,
  withFormContext
} from './index'

const components = {
  Form,
  Select,
  TextField,
  UrlTextField,
  withForm,
  withFormContext
}

describe('Export/Import tests', () => {
  test.each(Object.entries(components))('%s', (name, component) => {
    expect(component).toBeDefined()
  })
})
