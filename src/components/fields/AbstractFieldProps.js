import PropTypes from 'prop-types'

export const DefaultErrorMessages = {
  required: 'This field is required'
}

export const AbstractPropTypes = {
  name: PropTypes.string.isRequired,
  hookProps: PropTypes.object,
  errorMessages: PropTypes.object
}

export const AbstractDefaultProps = {
  hookProps: {},
  errorMessages: DefaultErrorMessages
}
