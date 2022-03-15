import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../../Form'
import Collection from './Collection'

describe('Collection tests', () => {
  test('render', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Form
        parameters={{
          defaultValues: {
            test: [{ value: '' }]
          }
        }}
      >
        <Collection
          name='test'
          fieldsRender={() => null}
          buttonsRender={() => null}
        />
      </Form>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
