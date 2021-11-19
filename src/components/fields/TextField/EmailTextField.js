import React, { Component } from 'react'
import TextField from './TextField'
import { isEmail } from '../../../validators/validators'

class EmailTextField extends Component {
  static propTypes = {
    ...TextField.propTypes
  }

  static defaultProps = {
    ...TextField.defaultProps
  }

  render() {
    const { RegisterOptions } = this.props
    RegisterOptions.validate = {
      ...RegisterOptions.validate,
      isEmail
    }

    return <TextField {...this.props} {...RegisterOptions} />
  }
}

export default EmailTextField
