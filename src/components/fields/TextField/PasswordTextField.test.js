import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../../Form'
import PasswordTextField from './PasswordTextField'

describe('PasswordTextField tests', () => {
  test('render', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Form>
        <PasswordTextField name='test' passwordDifficulty='null' />
      </Form>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
