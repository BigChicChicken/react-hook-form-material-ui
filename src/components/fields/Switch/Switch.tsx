import React, { Component } from 'react'
import {
  Switch as SwitchBase,
  FormControl,
  FormControlLabel,
  FormHelperText
} from '@mui/material'
import withFormContext from '../../../wrappers/withFormContext'
import {
  AbstractDefaultProps,
  AbstractFieldProps,
  AbstractPropTypes
} from '../AbstractFieldProps'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'
import { UseFormReturn } from 'react-hook-form/dist/types'

export interface SwitchProps extends AbstractFieldProps {
  formControlProps?: any
  switchProps?: any
}

class Switch extends Component<SwitchProps & { form: UseFormReturn }, any> {
  render() {
    const {
      formControlProps,
      switchProps,
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
                <SwitchBase {...switchProps} {...field} checked={value} />
              }
              label={switchProps.label || ''}
            />

            {!!error && (
              <FormHelperText>
                {ErrorMessages && ErrorMessages[error.type]
                  ? ErrorMessages[error.type]()
                  : error.message}
              </FormHelperText>
            )}
          </FormControl>
        )}
      />
    )
  }
}

const SwitchComponent = withFormContext(Switch)

SwitchComponent.propTypes = {
  ...AbstractPropTypes,
  formControlProps: PropTypes.object,
  checkboxProps: PropTypes.object
}

SwitchComponent.defaultProps = {
  ...AbstractDefaultProps,
  formControlProps: {},
  switchProps: {}
}

export default SwitchComponent
