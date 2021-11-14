import React from 'react'
import { useForm } from 'react-hook-form'

function withForm(Component, parameters = {}) {
  function ComponentWithFormProp(props) {
    const form = useForm(parameters)

    return <Component {...props} form={form} />
  }

  return ComponentWithFormProp
}

export default withForm
