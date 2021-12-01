## Documentation of [react-hook-form-material-ui](https://github.com/BigChicChicken/react-hook-form-material-ui)

- [Form](#form)
  - [onSubmit](#onSubmit)
  - [parameters](#parameters)


- [AbstractFieldProps](#abstractFieldProps)
  - [name](#name)
  - [RegisterOptions](#registerOptions)
  - [ErrorMessages](#errorMessages)
- [Checkbox](#checkbox)
  - [formControlProps](#checkbox_formControlProps)
  - [checkboxProps](#checkboxProps)

---

### <a id="form">Form</a>

`import { Form } from 'react-hook-form-material-ui'`

#### <a id="onSubmit">onSubmit</a> : function (optional) : () => {}

This function will receive the form data if form validation is successful.

*Refer to [handleSubmit (react-hook-form)](https://react-hook-form.com/api/useform/handlesubmit)*

#### <a id="parameters">parameters</a> : object (optional) : {}

This object allows to pass all parameters to the form's hook.

*Refer to [useForm (react-hook-form)](https://react-hook-form.com/api/useform)*

---

### <a id="abstractFieldProps">AbstractFieldProps</a>

#### <a id="name">name</a> : string (required)

The name of the field in the form.

#### <a id="registerOptions">RegisterOptions</a> : object (optional) : {}

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

#### <a id="checkboxProps">checkboxProps</a> : object (optional) : {}

This object allows to pass all properties to the Checkbox.

*Refer to [Checkbox (material-ui)](https://mui.com/api/checkbox)*

---
