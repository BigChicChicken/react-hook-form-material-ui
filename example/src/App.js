import React from 'react'
import Button from '@mui/material/Button'

import { Form } from 'react-hook-form-material-ui'
import 'react-hook-form-material-ui/dist/index.css'

const App = () => {
  const handleSubmit = (data) => {
    console.info("Data submitted:")
    console.info(data)
  }

  return <>
    <Form onSubmit={handleSubmit}>
      <Button type="submit" variant="contained">Contained</Button>
    </Form>
  </>
}

export default App
