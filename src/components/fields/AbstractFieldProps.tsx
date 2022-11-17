import React from 'react';
import PropTypes from 'prop-types'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { FieldError } from 'react-hook-form/dist/types/errors'

export interface AbstractFieldProps {
  name: string
  RegisterOptions?: RegisterOptions
  ErrorMessages?: { [key: string]: (error?: FieldError) => React.ReactNode }
}

export const AbstractPropTypes = {
  name: PropTypes.string.isRequired,
  RegisterOptions: PropTypes.object,
  ErrorMessages: PropTypes.object
}

export const AbstractDefaultProps = {
  RegisterOptions: {},
  ErrorMessages: {}
}
