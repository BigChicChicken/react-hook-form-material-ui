import React, { Component } from 'react'
import TextField from './TextField'
import { isUrl } from '../../validators/validators'

class UrlTextField extends Component {
  static propTypes = {
    ...TextField.propTypes
  }

  static defaultProps = {
    ...TextField.defaultProps
  }

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
