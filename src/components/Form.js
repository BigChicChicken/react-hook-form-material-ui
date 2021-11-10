import React, { Component } from 'react'
import withForm from '../wrappers/withForm'
import PropTypes from 'prop-types'
import { FormProvider } from 'react-hook-form'

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  static defaultProps = {
    onSubmit: () => {}
  }

  render() {
    const { onSubmit, form, children } = this.props

    return (
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    )
  }
}

export default withForm(Form)
