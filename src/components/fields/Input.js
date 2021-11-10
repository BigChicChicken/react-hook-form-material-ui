import React, { Component } from 'react'
import { Input as BaseInput } from '@mui/material'
import PropTypes from 'prop-types'
import withFormContext from '../../wrappers/withFormContext'

class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    const { name, form } = this.props

    return <BaseInput {...form.register(name)} />
  }
}

export default withFormContext(Input)
