import React, { Component } from 'react'
import withFormContext from '../../../wrappers/withFormContext'
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup as RadioGroupBase
} from '@mui/material'
import { AbstractDefaultProps, AbstractPropTypes } from '../AbstractFieldProps'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

export const propTypes = {
  ...AbstractPropTypes,
  formControlProps: PropTypes.object,
  radioGroupProps: PropTypes.object,
  options: PropTypes.array
}

export const defaultProps = {
  ...AbstractDefaultProps,
  formControlProps: {},
  radioGroupProps: {},
  options: []
}

class RadioGroup extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render() {
    const {
      formControlProps,
      radioGroupProps,
      options,
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
          <FormControl {...formControlProps} error={!!error}>
            {radioGroupProps.label && (
              <FormLabel>{radioGroupProps.label}</FormLabel>
            )}

            <RadioGroupBase {...radioGroupProps} {...field}>
              {options.map((option, index) => (
                <FormControlLabel key={index} {...option} control={<Radio />} />
              ))}
            </RadioGroupBase>

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

export default withFormContext(RadioGroup)
