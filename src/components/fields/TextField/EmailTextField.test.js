import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../../Form'
import EmailTextField from './EmailTextField'

describe('EmailTextField tests', () => {
  test('render', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Form>
        <EmailTextField
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
