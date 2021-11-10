import React from 'react'
import { useFormContext } from 'react-hook-form'

function withFormContext(Component) {
  function ComponentWithFormContextProp(props) {
    const formContext = useFormContext()

    return <Component {...props} form={formContext} />
  }

  return ComponentWithFormContextProp
}

export default withFormContext
