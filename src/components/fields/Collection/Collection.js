import React, { Component } from 'react'
import withFieldArray from '../../../wrappers/withFieldArray'
import PropTypes from 'prop-types'

export const propTypes = {
  name: PropTypes.string.isRequired,
  fieldsRender: PropTypes.func.isRequired,
  buttonsRender: PropTypes.func.isRequired
}

class Collection extends Component {
  static propTypes = propTypes

  render() {
    const { fieldsRender, buttonsRender, fieldArray } = this.props

    return (
      <React.Fragment>
        {fieldsRender(fieldArray)}
        {buttonsRender(fieldArray)}
      </React.Fragment>
    )
  }
}

export default withFieldArray(Collection)
