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
import { get } from 'react-hook-form'

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
      ErrorMessages,
      form
    } = this.props

    if (!selectProps.defaultValue) {
      selectProps.defaultValue = form.getValues(name)
    }

    const errors = get(form.formState.errors, name)

    return (
      <FormControl {...formControlProps} error={!!errors}>
        {selectProps.label && (
          <InputLabel {...inputLabelProps}>{selectProps.label}</InputLabel>
        )}

        <SelectBase {...selectProps} {...form.register(name, RegisterOptions)}>
          {children}
        </SelectBase>

        {!!errors && (
          <FormHelperText>
            {ErrorMessages[errors.type] || ErrorMessages.message}
          </FormHelperText>
        )}
      </FormControl>
    )
  }
}

export default withFormContext(Select)
