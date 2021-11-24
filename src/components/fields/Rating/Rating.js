import React, { Component } from 'react'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Rating as RatingBase
} from '@mui/material'
import withFormContext from '../../../wrappers/withFormContext'
import { AbstractDefaultProps, AbstractPropTypes } from '../AbstractFieldProps'
import PropTypes from 'prop-types'
import { get } from 'react-hook-form'

class Rating extends Component {
  static propTypes = {
    ...AbstractPropTypes,
    formControlProps: PropTypes.object,
    ratingProps: PropTypes.object
  }

  static defaultProps = {
    ...AbstractDefaultProps,
    formControlProps: {},
    ratingProps: {}
  }

  handleChange = (e, value) => {
    const { name, form } = this.props
    form.setValue(name, value, { shouldValidate: true })
  }

  render() {
    const {
      formControlProps,
      ratingProps,
      name,
      RegisterOptions,
      ErrorMessages,
      form: {
        register,
        formState: { errors }
      }
    } = this.props

    const { onBlur } = register(name, RegisterOptions)

    const error = get(errors, name)

    return (
      <FormControl {...formControlProps} error={!!error}>
        {ratingProps.label && <FormLabel>{ratingProps.label}</FormLabel>}

        <RatingBase
          {...ratingProps}
          name={name}
          onBlur={onBlur}
          onChange={this.handleChange}
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

export default withFormContext(Rating)
