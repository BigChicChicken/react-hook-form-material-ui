import React, { Component } from 'react'
import {
  Checkbox as CheckboxBase,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText
} from '@mui/material'
import withFormContext from '../../../wrappers/withFormContext'
import { AbstractDefaultProps, AbstractPropTypes } from '../AbstractFieldProps'
import PropTypes from 'prop-types'
import { get } from 'react-hook-form'

class Checkbox extends Component {
  static propTypes = {
    ...AbstractPropTypes,
    formControlProps: PropTypes.object,
    formGroupLabelProps: PropTypes.object,
    checkboxProps: PropTypes.object
  }

  static defaultProps = {
    ...AbstractDefaultProps,
    formControlProps: {},
    formGroupLabelProps: {},
    checkboxProps: {}
  }

  handleChange = (e, value) => {
    const { name, form } = this.props
    form.setValue(name, value, { shouldValidate: true })
  }

  render() {
    const {
      formControlProps,
      formGroupLabelProps,
      checkboxProps,
      name,
      RegisterOptions,
      ErrorMessages,
      form
    } = this.props

    if (!checkboxProps.defaultValue) {
      checkboxProps.checked = form.getValues(name) ?? false
    }

    const errors = get(form.formState.errors, name)

    return (
      <FormControl {...formControlProps} error={!!errors}>
        <FormGroup>
          <FormControlLabel
            {...formGroupLabelProps}
            control={
              <CheckboxBase
                {...checkboxProps}
                {...form.register(name, RegisterOptions)}
                onChange={this.handleChange}
              />
            }
            label={checkboxProps.label}
          />
        </FormGroup>

        {!!errors && (
          <FormHelperText>
            {ErrorMessages[errors.type] || ErrorMessages.message}
          </FormHelperText>
        )}
      </FormControl>
    )
  }
}

export default withFormContext(Checkbox)
