import React from 'react';
import { render } from '@testing-library/react';
import Form from '../../../../src/components/Form';
import Collection from '../../../../src/components/fields/Collection/Collection';

describe('Collection tests', () => {
  test('render', () => {
    render(
      <Form onSubmit={() => {}} parameters={{}}>
        <Collection
          name="test"
          fieldsRender={() => null}
          buttonsRender={() => null}
        />
      </Form>
    );
  });
});
