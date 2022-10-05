import React from 'react';
import { render } from '@testing-library/react';
import Form from '../../../../src/components/Form';
import RadioGroup from '../../../../src/components/fields/RadioGroup/RadioGroup';

describe('RadioGroup tests', () => {
  test('render', () => {
    render(
      <Form onSubmit={() => {}} parameters={{}}>
        <RadioGroup name="test" />
      </Form>
    );
  });
});
