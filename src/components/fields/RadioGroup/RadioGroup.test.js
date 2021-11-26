import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../../Form'
import RadioGroup from './RadioGroup'

describe('RadioGroup tests', () => {
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
        <RadioGroup name='test' />
      </Form>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
