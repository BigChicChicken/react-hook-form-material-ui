import React, { Component } from 'react'
import { TextField as TextFieldBase } from '@mui/material'
import withFormContext from '../../../wrappers/withFormContext'
import { AbstractDefaultProps, AbstractPropTypes } from '../AbstractFieldProps'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

class TextField extends Component {
  render() {
    const {
      textFieldProps,
      name,
      RegisterOptions,
      ErrorMessages,
      form: { control }
    } = this.props

    return (
      <Controller
        name={name}
        control={control}
        rules={RegisterOptions}
        render={({ field, fieldState: { error } }) => (
          <TextFieldBase
            {...textFieldProps}
            {...field}
            error={!!error}
            helperText={
              error ? ErrorMessages[error.type] || error.message : null
            }
          />
        )}
      />
    )
  }
}

const TextFieldComponent = withFormContext(TextField)

TextFieldComponent.propTypes = {
  ...AbstractPropTypes,
  textFieldProps: PropTypes.object
}

TextFieldComponent.defaultProps = {
  ...AbstractDefaultProps,
  textFieldProps: {}
}

export default TextFieldComponent
