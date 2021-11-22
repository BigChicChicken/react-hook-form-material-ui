import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../../Form'
import Select from './Select'
import { MenuItem } from '@mui/material'

describe('Select tests', () => {
  test('render', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Form
        parameters={{
          defaultValues: {
            test: ''
          }
        }}
      >
        <Select name='test'>
          <MenuItem value=''>First item</MenuItem>
        </Select>
      </Form>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
