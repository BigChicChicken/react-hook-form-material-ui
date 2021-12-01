import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../../Form'
import Switch from './Switch'

describe('Switch tests', () => {
  test('render', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Form>
        <Switch name='test' />
      </Form>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
