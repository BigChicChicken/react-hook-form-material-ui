import React from 'react'
import { useFormContext } from 'react-hook-form'

function withFormContext(Component) {
  function ComponentWithFormContextProp(props) {
    const formContext = useFormContext()
    const { forwardedRef, ...otherProps } = props

    return <Component ref={forwardedRef} {...otherProps} form={formContext} />
  }

  for (const [key, value] of Object.entries(Component)) {
    ComponentWithFormContextProp[key] = value
  }

  return ComponentWithFormContextProp
}

export default withFormContext
