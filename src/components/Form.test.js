import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'

describe('Form tests', () => {
  test('render', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Form onSubmit={() => {}}>Content</Form>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
