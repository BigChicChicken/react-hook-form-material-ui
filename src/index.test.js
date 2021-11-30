import {
  Form,
  RadioGroup,
  Checkbox,
  Select,
  Slider,
  TextField,
  EmailTextField,
  UrlTextField,
  withForm,
  withFormContext
} from './index'

const components = {
  Form,
  RadioGroup,
  Checkbox,
  Select,
  Slider,
  TextField,
  EmailTextField,
  UrlTextField,
  withForm,
  withFormContext
}

describe('Export/Import tests', () => {
  test.each(Object.entries(components))('%s', (name, component) => {
    expect(component).toBeDefined()
  })
})
