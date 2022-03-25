import React from 'react'
import { useFormContext } from 'react-hook-form'
import hoistNonReactStatics from 'hoist-non-react-statics'

function withFormContext(Component) {
  const componentName = Component.displayName || Component.name || 'Component'

  const render = (props, ref) => {
    const formContext = useFormContext()

    return <Component form={formContext} ref={ref} {...props} />
  }

  const WithFormContext = React.forwardRef(render)
  WithFormContext.displayName = `WithFormContext(${componentName})`

  return hoistNonReactStatics(WithFormContext, Component)
}

export default withFormContext
