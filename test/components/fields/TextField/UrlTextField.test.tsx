import * as React from 'react'
import { render } from '@testing-library/react'
import Form from '../../../../src/components/Form'
import UrlTextField from '../../../../src/components/fields/TextField/UrlTextField'

describe('TextField tests', () => {
  test('render', () => {
    render(
      <Form onSubmit={() => {}} parameters={{}}>
        <UrlTextField name='test' />
      </Form>
    )
  })
})
