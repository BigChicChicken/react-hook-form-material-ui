import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import hoistNonReactStatics from 'hoist-non-react-statics'

function withFieldArray(Component) {
  const componentName = Component.displayName || Component.name || 'Component'

  const render = (props, ref) => {
    const { control } = useFormContext()
    const fieldArray = useFieldArray({
      control,
      name: props.name
    })

    return <Component fieldArray={fieldArray} ref={ref} {...props} />
  }

  const WithFieldArray = React.forwardRef(render)
  WithFieldArray.displayName = `WithFieldArray(${componentName})`

  return hoistNonReactStatics(WithFieldArray, Component)
}

export default withFieldArray
