import React, { Component } from 'react'
import withForm from '../wrappers/withForm'
import PropTypes from 'prop-types'

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  render() {
    const { onSubmit, form, children } = this.props

    return <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
  }
}

export default withForm(Form)
