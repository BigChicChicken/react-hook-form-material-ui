import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../../Form'
import Checkbox from './Checkbox'

describe('Checkbox tests', () => {
  test('render', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Form>
        <Checkbox name='test' />
      </Form>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
