import React, { Component } from 'react';
import TextField, { TextFieldProps } from './TextField';
import { isEmail } from '../../../validators/validators';

export interface EmailTextFieldProps extends TextFieldProps {}

class EmailTextField extends Component<EmailTextFieldProps, any> {
  static propTypes = {
    ...TextField.propTypes,
  };

  static defaultProps = {
    ...TextField.defaultProps,
  };

  render() {
    const { RegisterOptions } = this.props;

    if (RegisterOptions) {
      RegisterOptions.validate = {
        ...RegisterOptions.validate,
        isEmail,
      };
    }

    return <TextField {...this.props} {...RegisterOptions} />;
  }
}

export default EmailTextField;
