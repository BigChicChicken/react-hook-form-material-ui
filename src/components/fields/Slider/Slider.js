import React, { Component } from 'react'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Slider as SliderBase
} from '@mui/material'
import withFormContext from '../../../wrappers/withFormContext'
import { AbstractDefaultProps, AbstractPropTypes } from '../AbstractFieldProps'
import PropTypes from 'prop-types'
import { get } from 'react-hook-form'

class Slider extends Component {
  static propTypes = {
    ...AbstractPropTypes,
    formControlProps: PropTypes.object,
    sliderProps: PropTypes.object
  }

  static defaultProps = {
    ...AbstractDefaultProps,
    formControlProps: {},
    sliderProps: {}
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
      sliderProps,
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
        {sliderProps.label && <FormLabel>{sliderProps.label}</FormLabel>}
        <SliderBase
          {...sliderProps}
          {...register(name, RegisterOptions)}
          defaultValue={defaultValue}
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

export default withFormContext(Slider)
