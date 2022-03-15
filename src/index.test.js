import {
  Form,
  RadioGroup,
  Checkbox,
  Collection,
  Select,
  Slider,
  Switch,
  TextField,
  EmailTextField,
  UrlTextField,
  withFieldArray,
  withForm,
  withFormContext
} from './index'

const components = {
  Form,
  RadioGroup,
  Checkbox,
  Collection,
  Select,
  Slider,
  Switch,
  TextField,
  EmailTextField,
  UrlTextField,
  withFieldArray,
  withForm,
  withFormContext
}

describe('Export/Import tests', () => {
  test.each(Object.entries(components))('%s', (name, component) => {
    expect(component).toBeDefined()
  })
})
