import React from 'react'
import { useForm } from 'react-hook-form'

function withForm(Component) {
  function ComponentWithFormProp(props) {
    const form = useForm()

    return <Component {...props} form={form} />
  }

  return ComponentWithFormProp
}

export default withForm
