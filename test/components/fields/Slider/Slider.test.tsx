import React from 'react';
import { render } from '@testing-library/react';
import Form from '../../../../src/components/Form';
import Slider from '../../../../src/components/fields/Slider/Slider';

describe('Slider tests', () => {
  test('render', () => {
    render(
      <Form onSubmit={() => {}} parameters={{}}>
        <Slider name="test" />
      </Form>
    );
  });
});
