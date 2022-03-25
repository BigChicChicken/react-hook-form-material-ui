import React, { Component } from 'react'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as SelectBase
} from '@mui/material'
import withFormContext from '../../../wrappers/withFormContext'
import { AbstractDefaultProps, AbstractPropTypes } from '../AbstractFieldProps'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

export const propTypes = {
  ...AbstractPropTypes,
  formControlProps: PropTypes.object,
  selectProps: PropTypes.object
}

export const defaultProps = {
  ...AbstractDefaultProps,
  formControlProps: {},
  selectProps: {}
}

class Select extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render() {
    const {
      formControlProps,
      selectProps,
      children,
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
            {selectProps.label && <InputLabel>{selectProps.label}</InputLabel>}

            <SelectBase {...selectProps} {...field}>
              {children}
            </SelectBase>

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

export default withFormContext(Select)
