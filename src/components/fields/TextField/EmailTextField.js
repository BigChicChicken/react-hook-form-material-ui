import React, { Component } from 'react'
import TextField, {
  propTypes as TextFieldPropTypes,
  defaultProps as TextFieldDefaultProps
} from './TextField'
import { isEmail } from '../../../validators/validators'

export const propTypes = {
  ...TextFieldPropTypes
}

export const defaultProps = {
  ...TextFieldDefaultProps
}

class EmailTextField extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

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
