import React from 'react';
import { render } from '@testing-library/react';
import Form from '../../../../src/components/Form';
import EmailTextField from '../../../../src/components/fields/TextField/EmailTextField';

describe('EmailTextField tests', () => {
  test('render', () => {
    render(
      <Form onSubmit={() => {}} parameters={{}}>
        <EmailTextField name="test" />
      </Form>
    );
  });
});
