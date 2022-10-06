import * as React from 'react'
import { render } from '@testing-library/react'
import Form from '../../../src/components/Form'

describe('Form tests', () => {
  test('render', () => {
    render(
      <Form onSubmit={() => {}} parameters={{}}>
        Content
      </Form>
    )
  })
})
