## Documentation of [react-hook-form-material-ui](https://github.com/BigChicChicken/react-hook-form-material-ui)

- [Form](#form)
  - [onSubmit](#form_onSubmit)
  - [parameters](#form_parameters)


- [AbstractFieldProps](#abstractFieldProps)
  - [name](#abstractFieldProps_name)
  - [RegisterOptions](#abstractFieldProps_registerOptions)
  - [ErrorMessages](#abstractFieldProps_errorMessages)
- [Checkbox](#checkbox)
  - [formControlProps](#checkbox_formControlProps)
  - [checkboxProps](#checkbox_checkboxProps)
- [RadioGroup](#radioGroup)
  - [formControlProps](#radioGroup_formControlProps)
  - [radioGroupProps](#radioGroup_radioGroupProps)
  - [options](#radioGroup_options)
- [Select](#select)
  - [formControlProps](#select_formControlProps)
  - [selectProps](#select_selectProps)
- [Slider](#slider)
  - [formControlProps](#slider_formControlProps)
  - [sliderProps](#slider_sliderProps)
- [Switch](#switch)
  - [formControlProps](#switch_formControlProps)
  - [switchProps](#switch_switchProps)
- [TextField](#textField)
  - [textFieldProps](#textField_textFieldProps)
- [EmailTextField](#emailTextField)
- [PasswordTextField](#passwordTextField)
  - [passwordDifficulty](#passwordTextField_passwordDifficulty)
- [UrlTextField](#urlTextField)
---

### <a id="form">Form</a>

`import { Form } from 'react-hook-form-material-ui'`

#### <a id="form_onSubmit">onSubmit</a> : function (optional) : () => {}

This function will receive the form data if form validation is successful.

*Refer to [handleSubmit (react-hook-form)](https://react-hook-form.com/api/useform/handlesubmit)*

#### <a id="form_parameters">parameters</a> : object (optional) : {}

This object allows to pass all parameters to the form's hook.

*Refer to [useForm (react-hook-form)](https://react-hook-form.com/api/useform)*

---

### <a id="abstractFieldProps">AbstractFieldProps</a>

#### <a id="abstractFieldProps_name">name</a> : string (required)

The name of the field in the form.

#### <a id="abstractFieldProps_registerOptions">RegisterOptions</a> : object (optional) : {}

This object allows to pass all options to the register.

*Refer to [register (react-hook-form)](https://react-hook-form.com/api/useform/register)*

#### <a id="errorMessages">ErrorMessages</a> : object (optional) : {}

This object can be used to predefine all error messages.

---

### <a id="checkbox">Checkbox</a>

*Inheritance*

*While not explicitly documented above, the props of the [AbstractFieldProps](#abstractFieldProps) component are also available on this component.*

`import { Checkbox } from 'react-hook-form-material-ui'`

#### <a id="checkbox_formControlProps">formControlProps</a> : object (optional) : {}

This object allows to pass all properties to the FormControl.

*Refer to [FormControl (material-ui)](https://mui.com/api/form-control)*

#### <a id="checkbox_checkboxProps">checkboxProps</a> : object (optional) : {}

This object allows to pass all properties to the Checkbox.

*Refer to [Checkbox (material-ui)](https://mui.com/api/checkbox)*

---

### <a id="radioGroup">RadioGroup</a>

*Inheritance*

*While not explicitly documented above, the props of the [AbstractFieldProps](#abstractFieldProps) component are also available on this component.*

`import { RadioGroup } from 'react-hook-form-material-ui'`

#### <a id="radioGroup_formControlProps">formControlProps</a> : object (optional) : {}

This object allows to pass all properties to the FormControl.

*Refer to [FormControl (material-ui)](https://mui.com/api/form-control)*

#### <a id="radioGroup_radioGroupProps">radioGroupProps</a> : object (optional) : {}

This object allows to pass all properties to the RadioGroup.

*Refer to [RadioGroup (material-ui)](https://mui.com/api/radio-group)*

#### <a id="radioGroup_options">options</a> : array (optional) : []

An array with the available choices.

example:
``` jsx
[
  { control: <Radio value="first_choice" />, label: "First choice" },
  { control: <Radio value="second_choice" />, label: "Second choice" },
]
```

---

### <a id="select">Select</a>

*Inheritance*

*While not explicitly documented above, the props of the [AbstractFieldProps](#abstractFieldProps) component are also available on this component.*

`import { Select } from 'react-hook-form-material-ui'`

#### <a id="select_formControlProps">formControlProps</a> : object (optional) : {}

This object allows to pass all properties to the FormControl.

*Refer to [FormControl (material-ui)](https://mui.com/api/form-control)*

#### <a id="select_selectProps">selectProps</a> : object (optional) : {}

This object allows to pass all properties to the Select.

*Refer to [Select (material-ui)](https://mui.com/api/select)*

---

### <a id="slider">Slider</a>

*Inheritance*

*While not explicitly documented above, the props of the [AbstractFieldProps](#abstractFieldProps) component are also available on this component.*

`import { Slider } from 'react-hook-form-material-ui'`

#### <a id="slider_formControlProps">formControlProps</a> : object (optional) : {}

This object allows to pass all properties to the FormControl.

*Refer to [FormControl (material-ui)](https://mui.com/api/form-control)*

#### <a id="slider_selectProps">sliderProps</a> : object (optional) : {}

This object allows to pass all properties to the Slider.

*Refer to [Slider (material-ui)](https://mui.com/api/slider)*

---

### <a id="switch">Switch</a>

*Inheritance*

*While not explicitly documented above, the props of the [AbstractFieldProps](#abstractFieldProps) component are also available on this component.*

`import { Switch } from 'react-hook-form-material-ui'`

#### <a id="switch_formControlProps">formControlProps</a> : object (optional) : {}

This object allows to pass all properties to the FormControl.

*Refer to [FormControl (material-ui)](https://mui.com/api/form-control)*

#### <a id="switch_switchProps">switchProps</a> : object (optional) : {}

This object allows to pass all properties to the Switch.

*Refer to [Switch (material-ui)](https://mui.com/api/switch)*

---

### <a id="textField">TextField</a>

*Inheritance*

*While not explicitly documented above, the props of the [AbstractFieldProps](#abstractFieldProps) component are also available on this component.*

`import { TextField } from 'react-hook-form-material-ui'`

#### <a id="textField_textFieldProps">textFieldProps</a> : object (optional) : {}

This object allows to pass all properties to the TextField.

*Refer to [TextField (material-ui)](https://mui.com/api/text-field)*

---

### <a id="emailTextField">EmailTextField</a>

*Inheritance*

*While not explicitly documented above, the props of the [TextField](#textField) component are also available on this component.*

`import { EmailTextField } from 'react-hook-form-material-ui'`

---

### <a id="passwordTextField">PasswordTextField</a>

*Inheritance*

*While not explicitly documented above, the props of the [TextField](#textField) component are also available on this component.*

`import { PasswordTextField } from 'react-hook-form-material-ui'`

#### <a id="passwordTextField_passwordDifficulty">passwordDifficulty</a> : string : {}

Choose a password difficulty between:
  - "complex": The password must be have one uppercase, one lowercase, one digit and one special character.
  - "basic": The password must be have one uppercase, one lowercase, and one digit.
  - "simplest": The password must be have one uppercase and one lowercase.
  - "null": No checks will be performed by default.

*Refer to [FormControl (material-ui)](https://mui.com/api/form-control)*

---

### <a id="urlTextField">UrlTextField</a>

*Inheritance*

*While not explicitly documented above, the props of the [TextField](#textField) component are also available on this component.*

`import { UrlTextField } from 'react-hook-form-material-ui'`

---
