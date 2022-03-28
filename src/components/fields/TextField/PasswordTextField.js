import React, { Component } from 'react'
import TextField from './TextField'
import {
  hasDigit,
  hasLowercase,
  hasSpecialCharacter,
  hasUppercase
} from '../../../validators/validators'
import PropTypes from 'prop-types'

class PasswordTextField extends Component {
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

const PasswordTextFieldComponent = PasswordTextField

PasswordTextFieldComponent.propTypes = {
  ...TextField.propTypes,
  passwordDifficulty: PropTypes.oneOf(['complex', 'basic', 'simplest', 'null'])
    .isRequired
}

PasswordTextFieldComponent.defaultProps = {
  ...TextField.defaultProps
}

export default PasswordTextFieldComponent
