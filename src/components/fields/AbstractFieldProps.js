import PropTypes from 'prop-types'

export const AbstractPropTypes = {
  name: PropTypes.string.isRequired,
  hookProps: PropTypes.object
}

export const AbstractDefaultProps = {
  hookProps: {}
}
