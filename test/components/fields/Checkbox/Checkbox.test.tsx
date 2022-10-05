import React from 'react';
import { render } from '@testing-library/react';
import Form from '../../../../src/components/Form';
import Checkbox from '../../../../src/components/fields/Checkbox/Checkbox';

describe('Checkbox tests', () => {
  test('render', () => {
    render(
      <Form onSubmit={() => {}} parameters={{}}>
        <Checkbox name="test" />
      </Form>
    );
  });
});
