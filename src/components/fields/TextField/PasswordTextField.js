import React, { Component } from 'react'
import TextField, {
  propTypes as TextFieldPropTypes,
  defaultProps as TextFieldDefaultProps
} from './TextField'
import {
  hasDigit,
  hasLowercase,
  hasSpecialCharacter,
  hasUppercase
} from '../../../validators/validators'
import PropTypes from 'prop-types'

export const propTypes = {
  ...TextFieldPropTypes,
  passwordDifficulty: PropTypes.oneOf(['complex', 'basic', 'simplest', 'null'])
    .isRequired
}

export const defaultProps = {
  ...TextFieldDefaultProps
}

class PasswordTextField extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render() {
    const { textFieldProps, RegisterOptions, passwordDifficulty } = this.props

    switch (passwordDifficulty) {
      case 'complex':
        RegisterOptions.validate = {
          ...RegisterOptions.validate,
          hasUppercase,
          hasLowercase,
          hasDigit,
          hasSpecialCharacter
        }
        break

      case 'basic':
        RegisterOptions.validate = {
          ...RegisterOptions.validate,
          hasUppercase,
          hasLowercase,
          hasDigit
        }
        break

      case 'simplest':
        RegisterOptions.validate = {
          ...RegisterOptions.validate,
          hasUppercase,
          hasLowercase
        }
        break
    }

    textFieldProps.type = 'password'

    return <TextField {...this.props} {...RegisterOptions} />
  }
}

export default PasswordTextField
