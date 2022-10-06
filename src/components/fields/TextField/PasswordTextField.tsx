import React, { Component } from 'react'
import TextField, { TextFieldProps } from './TextField'
import {
  hasDigit,
  hasLowercase,
  hasSpecialCharacter,
  hasUppercase
} from '../../../validators/validators'
import PropTypes from 'prop-types'

export interface PasswordTextFieldProps extends TextFieldProps {
  passwordDifficulty?: 'complex' | 'basic' | 'simplest'
}

class PasswordTextField extends Component<PasswordTextFieldProps, any> {
  static propTypes = {
    ...TextField.propTypes,
    passwordDifficulty: PropTypes.oneOf(['complex', 'basic', 'simplest', null])
  }

  static defaultProps = {
    ...TextField.defaultProps
  }

  render() {
    const { textFieldProps, RegisterOptions, passwordDifficulty } = this.props

    if (RegisterOptions) {
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
    }

    textFieldProps.type = 'password'

    return <TextField {...this.props} {...RegisterOptions} />
  }
}

export default PasswordTextField
