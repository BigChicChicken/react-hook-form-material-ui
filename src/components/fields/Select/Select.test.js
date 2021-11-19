import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../../Form'
import Select from './Select'

describe('Select tests', () => {
  test('render', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Form>
        <Select
          name='test'
          textFieldProps={{}}
          RegisterOptions={{}}
          ErrorMessages={{}}
        />
      </Form>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
