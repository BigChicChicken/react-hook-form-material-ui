import React, { Component } from 'react'
import TextField from './TextField'
import { isUrl } from '../../../validators/validators'

class UrlTextField extends Component {
  render() {
    const { RegisterOptions } = this.props
    RegisterOptions.validate = {
      ...RegisterOptions.validate,
      isUrl
    }

    return <TextField {...this.props} {...RegisterOptions} />
  }
}

const UrlTextFieldComponent = UrlTextField

UrlTextFieldComponent.propTypes = {
  ...TextField.propTypes
}

UrlTextFieldComponent.defaultProps = {
  ...TextField.defaultProps
}

export default UrlTextFieldComponent
