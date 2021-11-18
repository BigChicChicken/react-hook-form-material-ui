import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../../Form'
import UrlTextField from './UrlTextField'

describe('TextField tests', () => {
  test('render', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Form>
        <UrlTextField
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
