import React from 'react'
import Button from '@mui/material/Button'
import { Form, TextField, UrlTextField, Select } from 'react-hook-form-material-ui'
import { FormControl, MenuItem } from "@mui/material";

const ErrorMessages = {
  required: "This field is required.",
  isUrl: "This field is not an URL."
}

const App = () => {
  const handleSubmit = (data) => {
    console.info("Data submitted:")
    console.info(data)
  }

  return <>
    <Form
      onSubmit={handleSubmit}
      parameters={{
        mode: "all",
        defaultValues: {
          textField: "My TextField",
          urlTextField: "my.url",
          select: 1
        }
      }}
    >
      <TextField
        textFieldProps={{label: "TextField"}}
        name="textField"
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <UrlTextField
        textFieldProps={{label: "UrlTextField"}}
        name="urlTextField"
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <Select
        selectProps={{label: "Select"}}
        name="select"
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      >
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
