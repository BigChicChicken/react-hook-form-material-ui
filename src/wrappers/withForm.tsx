import React, { ComponentType, ForwardedRef } from 'react'
import { useForm, UseFormProps } from 'react-hook-form'
import hoistNonReactStatics from 'hoist-non-react-statics'

export default (parameters: UseFormProps) =>
  <T extends any>(Component: ComponentType<T>) => {
    const componentName = Component.displayName || Component.name || 'Component'

    const render = (props: any, ref: ForwardedRef<any>) => {
      const form = useForm(parameters)

      return <Component {...props} form={form} ref={ref} />
    }

    const WithForm = React.forwardRef(render)
    WithForm.displayName = `WithForm(${componentName})`

    return hoistNonReactStatics(WithForm, Component)
  }
