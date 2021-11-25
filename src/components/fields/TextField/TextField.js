import React, { Component } from 'react'
import { TextField as TextFieldBase } from '@mui/material'
import withFormContext from '../../../wrappers/withFormContext'
import { AbstractDefaultProps, AbstractPropTypes } from '../AbstractFieldProps'
import PropTypes from 'prop-types'
import { get } from 'react-hook-form'

class TextField extends Component {
  static propTypes = {
    ...AbstractPropTypes,
    textFieldProps: PropTypes.object
  }

  static defaultProps = {
    ...AbstractDefaultProps,
    textFieldProps: {}
  }

  render() {
    const {
      textFieldProps,
      name,
      RegisterOptions,
      ErrorMessages,
      form: {
        register,
        formState: { errors }
      }
    } = this.props
    const error = get(errors, name)

    return (
      <TextFieldBase
        {...textFieldProps}
        {...register(name, RegisterOptions)}
        error={!!error}
        helperText={error ? ErrorMessages[error.type] || error.message : null}
      />
    )
  }
}

export default withFormContext(TextField)
