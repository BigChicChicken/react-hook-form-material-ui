import React, { Component } from 'react'
import {
  Checkbox as CheckboxBase,
  FormControl,
  FormControlLabel,
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
    checkboxProps: PropTypes.object
  }

  static defaultProps = {
    ...AbstractDefaultProps,
    formControlProps: {},
    checkboxProps: {}
  }

  handleChange = (e, value) => {
    const { name, form } = this.props
    form.setValue(name, value, { shouldValidate: true })
  }

  render() {
    const {
      formControlProps,
      checkboxProps,
      name,
      RegisterOptions,
      ErrorMessages,
      form: {
        register,
        formState: { errors },
        getValues
      }
    } = this.props
    const { onBlur } = register(name, RegisterOptions)
    const error = get(errors, name)
    const value = getValues(name)

    return (
      <FormControl {...formControlProps} error={!!error}>
        <FormControlLabel
          control={
            <CheckboxBase
              {...checkboxProps}
              name={name}
              onBlur={onBlur}
              onChange={this.handleChange}
              checked={value}
            />
          }
          label={checkboxProps.label || ''}
        />

        {!!error && (
          <FormHelperText>
            {ErrorMessages[error.type] || ErrorMessages.message}
          </FormHelperText>
        )}
      </FormControl>
    )
  }
}

export default withFormContext(Checkbox)
