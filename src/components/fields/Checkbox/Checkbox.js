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

  constructor(props) {
    super(props)

    const {
      name,
      form: { getValues }
    } = this.props

    this.state = {
      defaultChecked: getValues(name)
    }
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
        formState: { errors }
      }
    } = this.props
    const { defaultChecked } = this.state
    const error = get(errors, name)

    return (
      <FormControl {...formControlProps} error={!!error}>
        <FormControlLabel
          control={
            <CheckboxBase
              {...checkboxProps}
              {...register(name, RegisterOptions)}
              defaultChecked={defaultChecked}
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
