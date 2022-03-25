import React, { Component } from 'react'
import TextField, {
  propTypes as TextFieldPropTypes,
  defaultProps as TextFieldDefaultProps
} from './TextField'
import { isUrl } from '../../../validators/validators'

export const propTypes = {
  ...TextFieldPropTypes
}

export const defaultProps = {
  ...TextFieldDefaultProps
}

class UrlTextField extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render() {
    const { RegisterOptions } = this.props
    RegisterOptions.validate = {
      ...RegisterOptions.validate,
      isUrl
    }

    return <TextField {...this.props} {...RegisterOptions} />
  }
}

export default UrlTextField
