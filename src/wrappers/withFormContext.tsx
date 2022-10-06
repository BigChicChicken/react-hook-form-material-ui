import { useFormContext } from 'react-hook-form'
import React, { ComponentType, ForwardedRef } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

export default <T extends any>(Component: ComponentType<T>) => {
  const componentName = Component.displayName || Component.name || 'Component'

  const render = (props: any, ref: ForwardedRef<any>) => {
    const form = useFormContext()

    return <Component {...props} form={form} ref={ref} />
  }

  const WithFormContext = React.forwardRef(render)
  WithFormContext.displayName = `WithFormContext(${componentName})`

  return hoistNonReactStatics(WithFormContext, Component)
}
