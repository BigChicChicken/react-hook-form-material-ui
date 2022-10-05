import React, { Component } from 'react';
import TextField, { TextFieldProps } from './TextField';
import { isUrl } from '../../../validators/validators';

export interface UrlTextFieldProps extends TextFieldProps {}

class UrlTextField extends Component<UrlTextFieldProps, any> {
  static propTypes = {
    ...TextField.propTypes,
  };

  static defaultProps = {
    ...TextField.defaultProps,
  };

  render() {
    const { RegisterOptions } = this.props;
    RegisterOptions.validate = {
      ...RegisterOptions.validate,
      isUrl,
    };

    return <TextField {...this.props} {...RegisterOptions} />;
  }
}

export default UrlTextField;
