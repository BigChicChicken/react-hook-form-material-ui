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

  constructor(props) {
    super(props)

    const {
      name,
      form: { getValues }
    } = this.props

    this.state = {
      defaultValue: getValues(name)
    }
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
        formState: { errors }
      }
    } = this.props
    const { defaultValue } = this.state
    const error = get(errors, name)

    return (
      <FormControl {...formControlProps} error={!!error}>
        {selectProps.label && <InputLabel>{selectProps.label}</InputLabel>}

        <SelectBase
          {...selectProps}
          {...register(name, RegisterOptions)}
          defaultValue={defaultValue}
        >
          {children}
        </SelectBase>

        {!!error && (
          <FormHelperText>
            {ErrorMessages[error.type] || error.message}
          </FormHelperText>
        )}
      </FormControl>
    )
  }
}

export default withFormContext(Select)
