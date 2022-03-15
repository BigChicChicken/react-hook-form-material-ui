import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../../Form'
import Slider from './Slider'

describe('Slider tests', () => {
  test('render', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Form
        parameters={{
          defaultValues: {
            test: 0
          }
        }}
      >
        <Slider name='test' />
      </Form>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
