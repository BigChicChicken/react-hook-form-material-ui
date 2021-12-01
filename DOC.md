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
