import React from 'react'
import Button from '@mui/material/Button'
import { Form, TextField } from 'react-hook-form-material-ui'
import 'react-hook-form-material-ui/dist/index.css'
import { FormControl } from "@mui/material";

const App = () => {
  const handleSubmit = (data) => {
    console.info("Data submitted:")
    console.info(data)
  }

  return <>
    <Form onSubmit={handleSubmit}>
      <TextField textFieldProps={{label: "Input"}} name="input" hookProps={{required: true}}/>

      <FormControl margin="dense">
        <Button type="submit" variant="contained">Submit</Button>
      </FormControl>
    </Form>
  </>
}

export default App
