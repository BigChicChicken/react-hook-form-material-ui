import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormProvider } from 'react-hook-form'
import withForm from '../wrappers/withForm'

class Form extends Component {
  render() {
    const { onSubmit, form, children } = this.props

    return (
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    )
  }
}

const FormComponent = React.forwardRef(({ parameters, ...props }, ref) =>
  React.createElement(withForm(Form, parameters), {
    ref,
    ...props
  })
)

FormComponent.propTypes = {
  onSubmit: PropTypes.func,
  parameters: PropTypes.object
}

FormComponent.defaultProps = {
  onSubmit: () => {},
  parameters: {}
}

FormComponent.displayName = 'Form'

export default FormComponent
