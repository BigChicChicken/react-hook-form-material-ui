import * as React from 'react'
import { render } from '@testing-library/react'
import Form from '../../../../src/components/Form'
import Switch from '../../../../src/components/fields/Switch/Switch'

describe('Switch tests', () => {
  test('render', () => {
    render(
      <Form onSubmit={() => {}} parameters={{}}>
        <Switch name='test' />
      </Form>
    )
  })
})
