import React from 'react'
import Button from '@mui/material/Button'
import { Form, TextField, Select } from 'react-hook-form-material-ui'
import { FormControl, MenuItem } from "@mui/material";

const App = () => {
  const handleSubmit = (data) => {
    console.info("Data submitted:")
    console.info(data)
  }

  return <>
    <Form onSubmit={handleSubmit}>
      <TextField textFieldProps={{label: "Input", margin: "dense"}} name="lol" hookProps={{
        required: 'This field is required'
      }}/>

      <Select formControlProps={{margin: "dense"}} selectProps={{label: "Select"}} name="select" hookProps={{
        required: 'This field is required'
      }}>
        <MenuItem value={undefined}>None</MenuItem>
        <MenuItem value={1}>First item</MenuItem>
        <MenuItem value={2}>Second item</MenuItem>
      </Select>

      <FormControl margin="dense">
        <Button type="submit" variant="contained">Submit</Button>
      </FormControl>
    </Form>
  </>
}

export default App
