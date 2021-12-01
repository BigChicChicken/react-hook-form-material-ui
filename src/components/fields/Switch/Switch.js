import React, { Component } from 'react'
import {
  Switch as SwitchBase,
  FormControl,
  FormControlLabel,
  FormHelperText
} from '@mui/material'
import withFormContext from '../../../wrappers/withFormContext'
import { AbstractDefaultProps, AbstractPropTypes } from '../AbstractFieldProps'
import PropTypes from 'prop-types'
import { get } from 'react-hook-form'

class Switch extends Component {
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
            <SwitchBase
              {...checkboxProps}
              {...register(name, RegisterOptions)}
              defaultChecked={defaultChecked}
            />
          }
          label={checkboxProps.label || ''}
        />

        {!!error && (
          <FormHelperText>
            {ErrorMessages[error.type] || error.message}
          </FormHelperText>
        )}
      </FormControl>
    )
  }
}

export default withFormContext(Switch)
