import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormProvider } from 'react-hook-form'
import withForm from '../wrappers/withForm'

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    parameters: PropTypes.object
  }

  static defaultProps = {
    onSubmit: () => {},
    parameters: {}
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

export default function (props) {
  const form = withForm(Form, props.parameters)

  return form(props)
}
