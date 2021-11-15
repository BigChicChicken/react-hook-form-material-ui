import React, { Component } from 'react'
import { TextField as TextFieldBase } from '@mui/material'
import withFormContext from '../../wrappers/withFormContext'
import { AbstractDefaultProps, AbstractPropTypes } from './AbstractFieldProps'
import PropTypes from 'prop-types'

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
    const { textFieldProps, name, RegisterOptions, ErrorMessages, form } =
      this.props
    const error = form.formState.errors[name] || null

    const errorProps = {}
    if (error) {
      errorProps.error = true
      errorProps.helperText = ErrorMessages[error.type] || error.message
    }

    return (
      <TextFieldBase
        {...textFieldProps}
        {...errorProps}
        {...form.register(name, RegisterOptions)}
      />
    )
  }
}

export default withFormContext(TextField)
