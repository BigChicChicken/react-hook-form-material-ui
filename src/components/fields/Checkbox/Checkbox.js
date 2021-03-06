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
import { Controller } from 'react-hook-form'

class Checkbox extends Component {
  render() {
    const {
      formControlProps,
      checkboxProps,
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
        render={({ field: { value, ...field }, fieldState: { error } }) => (
          <FormControl {...formControlProps} error={!!error}>
            <FormControlLabel
              control={
                <CheckboxBase {...checkboxProps} {...field} checked={value} />
              }
              label={checkboxProps.label || ''}
            />

            {!!error && (
              <FormHelperText>
                {ErrorMessages[error.type] || error.message}
              </FormHelperText>
            )}
          </FormControl>
        )}
      />
    )
  }
}

const CheckboxComponent = withFormContext(Checkbox)

CheckboxComponent.propTypes = {
  ...AbstractPropTypes,
  formControlProps: PropTypes.object,
  checkboxProps: PropTypes.object
}

CheckboxComponent.defaultProps = {
  ...AbstractDefaultProps,
  formControlProps: {},
  checkboxProps: {}
}

export default CheckboxComponent
