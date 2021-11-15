import PropTypes from 'prop-types'

export const AbstractPropTypes = {
  name: PropTypes.string.isRequired,
  RegisterOptions: PropTypes.object,
  ErrorMessages: PropTypes.object
}

export const AbstractDefaultProps = {
  RegisterOptions: {},
  ErrorMessages: {}
}
