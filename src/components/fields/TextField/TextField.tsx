import React, { Component } from 'react';
import { Controller } from 'react-hook-form';
import {
  AbstractDefaultProps,
  AbstractFieldProps,
  AbstractPropTypes,
} from '../AbstractFieldProps';
import { TextField as TextFieldBase } from '@mui/material';
import withFormContext from '../../../wrappers/withFormContext';
import { UseFormReturn } from 'react-hook-form/dist/types';
import PropTypes from 'prop-types';

export interface TextFieldProps extends AbstractFieldProps {
  textFieldProps?: any;
}

class TextField extends Component<
  TextFieldProps & { form: UseFormReturn },
  any
> {
  render() {
    const {
      textFieldProps,
      name,
      RegisterOptions,
      ErrorMessages,
      form: { control },
    } = this.props;

    return (
      <Controller
        name={name}
        control={control}
        rules={RegisterOptions}
        render={({ field, fieldState: { error } }) => (
          <TextFieldBase
            {...textFieldProps}
            {...field}
            error={!!error}
            helperText={
              error
                ? ErrorMessages
                  ? ErrorMessages[error.type]
                  : error.message
                : null
            }
          />
        )}
      />
    );
  }
}

const TextFieldComponent = withFormContext(TextField);

TextFieldComponent.propTypes = {
  ...AbstractPropTypes,
  textFieldProps: PropTypes.object,
};

TextFieldComponent.defaultProps = {
  ...AbstractDefaultProps,
  textFieldProps: {},
};

export default TextFieldComponent;
