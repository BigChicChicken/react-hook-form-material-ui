import React, { Component } from 'react'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as SelectBase
} from '@mui/material'
import withFormContext from '../../wrappers/withFormContext'
import { AbstractDefaultProps, AbstractPropTypes } from './AbstractFieldProps'
import PropTypes from 'prop-types'

class Select extends Component {
  static propTypes = {
    ...AbstractPropTypes,
    formControlProps: PropTypes.object,
    inputLabelProps: PropTypes.object,
    selectProps: PropTypes.object
  }

  static defaultProps = {
    ...AbstractDefaultProps,
    formControlProps: {},
    inputLabelProps: {},
    selectProps: {}
  }

  render() {
    const {
      formControlProps,
      inputLabelProps,
      selectProps,
      children,
      name,
      RegisterOptions,
      form
    } = this.props
    const error = form.formState.errors[name] || null

    const errorProps = {}
    if (error) {
      errorProps.error = true
      errorProps.helperText = error.message
    }

    if (!selectProps.defaultValue) {
      selectProps.defaultValue = form.getValues(name)
    }

    return (
      <FormControl {...formControlProps} error={errorProps.error}>
        {selectProps.label && (
          <InputLabel {...inputLabelProps}>{selectProps.label}</InputLabel>
        )}

        <SelectBase {...selectProps} {...form.register(name, RegisterOptions)}>
          {children}
        </SelectBase>

        {errorProps.error && (
          <FormHelperText>{errorProps.helperText}</FormHelperText>
        )}
      </FormControl>
    )
  }
}

export default withFormContext(Select)
