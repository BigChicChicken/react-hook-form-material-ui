import React, { Component } from 'react'
import { TextField as TextFieldBase } from '@mui/material'
import withFormContext from '../../wrappers/withFormContext'
import { AbstractDefaultProps, AbstractPropTypes } from './AbstractFieldProps'
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
    const { textFieldProps, name, RegisterOptions, ErrorMessages, form } =
      this.props
    const errors = get(form.formState.errors, name)

    return (
      <TextFieldBase
        {...textFieldProps}
        {...(errors && {
          error: true,
          helperText: ErrorMessages[errors.type] || errors.message
        })}
        {...form.register(name, RegisterOptions)}
      />
    )
  }
}

export default withFormContext(TextField)
