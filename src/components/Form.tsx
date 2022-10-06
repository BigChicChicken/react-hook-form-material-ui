import React, { Component, ReactNode } from 'react'
import PropTypes from 'prop-types'
import withForm from '../wrappers/withForm'
import { FormProvider, UseFormProps, UseFormReturn } from 'react-hook-form'

export interface FormProps {
  form: UseFormReturn
  onSubmit: (...args: any[]) => any
  children: ReactNode
}

class Form extends Component<FormProps, any> {
  render() {
    const { form, onSubmit, children } = this.props

    return (
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    )
  }
}

interface FormPropsWrapper {
  parameters: UseFormProps
  onSubmit: (...args: any[]) => any
  children: ReactNode
}

const FormWrapper = React.forwardRef((props: FormPropsWrapper, ref) => {
  const { parameters, ...formProps } = props
  const form = withForm(parameters)(Form)

  return React.createElement(form, {
    ...formProps,
    ref
  })
})

FormWrapper.displayName = 'FormWrapper'

FormWrapper.propTypes = {
  parameters: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default FormWrapper
