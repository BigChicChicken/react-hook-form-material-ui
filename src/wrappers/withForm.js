import React from 'react'
import { useForm } from 'react-hook-form'
import hoistNonReactStatics from 'hoist-non-react-statics'

function withForm(Component, parameters = {}) {
  const componentName = Component.displayName || Component.name || 'Component'

  const render = (props, ref) => {
    const form = useForm(parameters)

    return <Component form={form} ref={ref} {...props} />
  }

  const WithForm = React.forwardRef(render)
  WithForm.displayName = `WithForm(${componentName})`

  return hoistNonReactStatics(WithForm, Component)
}

export default withForm
