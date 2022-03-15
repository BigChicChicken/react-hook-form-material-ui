import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

function withFieldArray(Component) {
  function ComponentWithFieldArrayProp(props) {
    const { control } = useFormContext()

    const { forwardedRef, name, ...otherProps } = props

    const fieldArray = useFieldArray({
      control,
      name
    })

    return (
      <Component ref={forwardedRef} {...otherProps} fieldArray={fieldArray} />
    )
  }

  for (const [key, value] of Object.entries(Component)) {
    ComponentWithFieldArrayProp[key] = value
  }

  return ComponentWithFieldArrayProp
}

export default withFieldArray
