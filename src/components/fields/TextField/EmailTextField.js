import React, { Component } from 'react'
import TextField from './TextField'
import { isEmail } from '../../../validators/validators'

class EmailTextField extends Component {
  render() {
    const { RegisterOptions } = this.props
    RegisterOptions.validate = {
      ...RegisterOptions.validate,
      isEmail
    }

    return <TextField {...this.props} {...RegisterOptions} />
  }
}

const EmailTextFieldComponent = EmailTextField

EmailTextFieldComponent.propTypes = {
  ...TextField.propTypes
}

EmailTextFieldComponent.defaultProps = {
  ...TextField.defaultProps
}

export default EmailTextFieldComponent
