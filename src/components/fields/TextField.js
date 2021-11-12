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
    const { textFieldProps, name, hookProps, errorMessages, form } = this.props
    const errors = Object.values(form.formState.errors)

    const errorProps = {}
    if (errors.length > 0) {
      errorProps.error = true
      errorProps.helperText = errorMessages[errors[0].type]
    }

    return (
      <React.Fragment>
        <TextFieldBase
          {...textFieldProps}
          {...errorProps}
          {...form.register(name, hookProps)}
        />
      </React.Fragment>
    )
  }
}

export default withFormContext(TextField)
