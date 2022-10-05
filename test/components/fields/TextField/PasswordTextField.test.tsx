import React from 'react';
import { render } from '@testing-library/react';
import Form from '../../../../src/components/Form';
import PasswordTextField from '../../../../src/components/fields/TextField/PasswordTextField';

describe('TextField tests', () => {
  test('render', () => {
    render(
      <Form onSubmit={() => {}} parameters={{}}>
        <PasswordTextField name="test" />
      </Form>
    );
  });
});
