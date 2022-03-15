import React from 'react'
import { useForm } from 'react-hook-form'

function withForm(Component, parameters = {}) {
  function ComponentWithFormProp(props) {
    const form = useForm(parameters)
    const { forwardedRef, ...otherProps } = props

    return <Component ref={forwardedRef} {...otherProps} form={form} />
  }

  for (const [key, value] of Object.entries(Component)) {
    ComponentWithFormProp[key] = value
  }

  return ComponentWithFormProp
}

export default withForm
