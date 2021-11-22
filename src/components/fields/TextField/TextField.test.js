import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../../Form'
import TextField from './TextField'

describe('TextField tests', () => {
  test('render', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Form>
        <TextField name='test' />
      </Form>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
