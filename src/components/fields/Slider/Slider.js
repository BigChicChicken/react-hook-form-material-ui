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
import { Controller } from 'react-hook-form'

class Slider extends Component {
  render() {
    const {
      formControlProps,
      sliderProps,
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
            {sliderProps.label && <FormLabel>{sliderProps.label}</FormLabel>}
            <SliderBase {...sliderProps} {...field} />

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

const SliderComponent = withFormContext(Slider)

SliderComponent.propTypes = {
  ...AbstractPropTypes,
  formControlProps: PropTypes.object,
  sliderProps: PropTypes.object
}

SliderComponent.defaultProps = {
  ...AbstractDefaultProps,
  formControlProps: {},
  sliderProps: {}
}

export default SliderComponent
