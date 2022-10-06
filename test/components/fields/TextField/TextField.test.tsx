import * as React from 'react'
import { render } from '@testing-library/react'
import Form from '../../../../src/components/Form'
import TextField from '../../../../src/components/fields/TextField/TextField'

describe('TextField tests', () => {
  test('render', () => {
    render(
      <Form onSubmit={() => {}} parameters={{}}>
        <TextField name='test' />
      </Form>
    )
  })
})
