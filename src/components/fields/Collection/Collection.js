import React, { Component } from 'react'
import withFieldArray from '../../../wrappers/withFieldArray'
import PropTypes from 'prop-types'

class Collection extends Component {
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

const CollectionComponent = withFieldArray(Collection)

CollectionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  fieldsRender: PropTypes.func.isRequired,
  buttonsRender: PropTypes.func.isRequired
}

export default CollectionComponent
