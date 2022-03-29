import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormProvider } from 'react-hook-form'
import withForm from '../wrappers/withForm'

class Form extends Component {
  render() {
    const { form, onSubmit, children } = this.props

    return (
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    )
  }
}

const FormWrapper = class extends Component {
  constructor(props) {
    super(props)

    this.Component = withForm(props.parameters)(Form)
  }

  render() {
    const { parameters, innerRef, ...props } = this.props

    return React.createElement(this.Component, {
      ref: innerRef,
      ...props
    })
  }
}

const FormComponent = React.forwardRef((props, ref) => (
  <FormWrapper innerRef={ref} {...props} />
))

FormComponent.displayName = 'FormWrapper'

FormComponent.propTypes = {
  onSubmit: PropTypes.func,
  parameters: PropTypes.object
}

FormComponent.defaultProps = {
  onSubmit: () => {},
  parameters: {}
}

export default FormComponent
