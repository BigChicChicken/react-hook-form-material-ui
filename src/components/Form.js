import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormProvider } from 'react-hook-form'
import withForm from '../wrappers/withForm'

export const propTypes = {
  onSubmit: PropTypes.func,
  parameters: PropTypes.object
}

export const defaultProps = {
  onSubmit: () => {},
  parameters: {}
}

class Form extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render() {
    const { onSubmit, form, children } = this.props

    return (
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    )
  }
}

export default React.forwardRef(({ parameters, ...props }, ref) =>
  React.createElement(withForm(Form, parameters), {
    ref,
    ...props
  })
)
