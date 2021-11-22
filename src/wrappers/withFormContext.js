import React from 'react'
import { useFormContext } from 'react-hook-form'

function withFormContext(Component) {
  function ComponentWithFormContextProp(props) {
    const formContext = useFormContext()

    return <Component {...props} form={formContext} />
  }

  for (const [key, value] of Object.entries(Component)) {
    ComponentWithFormContextProp[key] = value
  }

  return ComponentWithFormContextProp
}

export default withFormContext
