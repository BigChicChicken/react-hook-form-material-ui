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
import { get } from 'react-hook-form'

class RadioGroup extends Component {
  static propTypes = {
    ...AbstractPropTypes,
    formControlProps: PropTypes.object,
    radioGroupProps: PropTypes.object,
    options: PropTypes.array
  }

  static defaultProps = {
    ...AbstractDefaultProps,
    formControlProps: {},
    radioGroupProps: {},
    options: []
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
      radioGroupProps,
      options,
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
        {radioGroupProps.label && (
          <FormLabel>{radioGroupProps.label}</FormLabel>
        )}

        <RadioGroupBase {...radioGroupProps} defaultValue={defaultValue}>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              {...option}
              {...register(name, RegisterOptions)}
              control={<Radio {...option.control.props} />}
            />
          ))}

          {!!error && (
            <FormHelperText>
              {ErrorMessages[error.type] || ErrorMessages.message}
            </FormHelperText>
          )}
        </RadioGroupBase>
      </FormControl>
    )
  }
}

export default withFormContext(RadioGroup)
