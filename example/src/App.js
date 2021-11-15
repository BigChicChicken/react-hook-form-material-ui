import React from 'react'
import Button from '@mui/material/Button'
import { Form, TextField, Select } from 'react-hook-form-material-ui'
import { FormControl, MenuItem } from "@mui/material";

const formParameters = {
  defaultValues: {textField: "toto", select: 1}
}



const App = () => {
  const handleSubmit = (data) => {
    console.info("Data submitted:")
    console.info(data)
  }

  return <>
    <Form onSubmit={handleSubmit} parameters={formParameters}>
      <TextField textFieldProps={{label: "TextField"}} name="textField" RegisterOptions={{
        required: 'This field is required'
      }}/>

      <Select selectProps={{label: "Select"}} name="select" RegisterOptions={{
        required: 'This field is required'
      }}>
        <MenuItem value={""}>None</MenuItem>
        <MenuItem value={1}>First item</MenuItem>
        <MenuItem value={2}>Second item</MenuItem>
      </Select>

      <FormControl>
        <Button type="submit" variant="contained">Submit</Button>
      </FormControl>
    </Form>
  </>
}

export default App
