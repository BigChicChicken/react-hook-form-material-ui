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

class Select extends Component {
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

const SelectComponent = withFormContext(Select)

SelectComponent.propTypes = {
  ...AbstractPropTypes,
  formControlProps: PropTypes.object,
  selectProps: PropTypes.object
}

SelectComponent.defaultProps = {
  ...AbstractDefaultProps,
  formControlProps: {},
  selectProps: {}
}

export default SelectComponent
