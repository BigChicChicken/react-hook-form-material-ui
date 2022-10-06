import * as React from 'react'
import { render } from '@testing-library/react'
import Form from '../../../../src/components/Form'
import Select from '../../../../src/components/fields/Select/Select'
import { MenuItem } from '@mui/material'

describe('Select tests', () => {
  test('render', () => {
    render(
      <Form
        onSubmit={() => {}}
        parameters={{
          defaultValues: {
            test: ''
          }
        }}
      >
        <Select name='test'>
          <MenuItem value=''>First item</MenuItem>
        </Select>
      </Form>
    )
  })
})
