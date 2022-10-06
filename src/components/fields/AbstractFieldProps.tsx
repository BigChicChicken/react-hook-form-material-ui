import PropTypes from 'prop-types'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'

export interface AbstractFieldProps {
  name: string
  RegisterOptions?: RegisterOptions
  ErrorMessages?: { [key: string]: string }
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
