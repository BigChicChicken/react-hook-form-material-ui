import React, { ComponentType, ForwardedRef } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import hoistNonReactStatics from 'hoist-non-react-statics'

export default <T extends any>(Component: ComponentType<T>) => {
  const componentName = Component.displayName || Component.name || 'Component'

  const render = (props: any, ref: ForwardedRef<any>) => {
    const { control } = useFormContext()
    const fieldArray = useFieldArray({
      control,
      name: props.name
    })

    return <Component {...props} fieldArray={fieldArray} ref={ref} />
  }

  const WithFormContext = React.forwardRef(render)
  WithFormContext.displayName = `withFieldArray(${componentName})`

  return hoistNonReactStatics(WithFormContext, Component)
}
