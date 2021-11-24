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
import { get } from 'react-hook-form'

class Select extends Component {
  static propTypes = {
    ...AbstractPropTypes,
    formControlProps: PropTypes.object,
    selectProps: PropTypes.object
  }

  static defaultProps = {
    ...AbstractDefaultProps,
    formControlProps: {},
    selectProps: {}
  }

  handleChange = (e) => {
    const { name, form } = this.props
    form.setValue(name, e.target.value, { shouldValidate: true })
  }

  render() {
    const {
      formControlProps,
      selectProps,
      children,
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
        {selectProps.label && <InputLabel>{selectProps.label}</InputLabel>}

        <SelectBase
          {...selectProps}
          name={name}
          onBlur={onBlur}
          onChange={this.handleChange}
          value={value}
        >
          {children}
        </SelectBase>

        {!!error && (
          <FormHelperText>
            {ErrorMessages[error.type] || ErrorMessages.message}
          </FormHelperText>
        )}
      </FormControl>
    )
  }
}

export default withFormContext(Select)
