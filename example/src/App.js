import React from 'react'
import Button from '@mui/material/Button'
import { Form, TextField, EmailTextField, UrlTextField, Select, Checkbox, RadioGroup, Slider, Switch } from 'react-hook-form-material-ui'
import { FormControl, MenuItem, Radio } from "@mui/material";

const ErrorMessages = {
  required: "This field is required.",
  isEmail: "This field is not an email.",
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
          emailTextField: "my.email@email.com",
          urlTextField: "https://root:root@my.url.com:8080/target?foo=bar",
          select: 1,
          checkbox: true,
          radioGroup: "male",
          slider: 45,
          switch: true
        }
      }}
    >
      <TextField
        name="textField"
        textFieldProps={{label: "TextField"}}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <EmailTextField
        name="emailTextField"
        textFieldProps={{label: "EmailTextField"}}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <UrlTextField
        name="urlTextField"
        textFieldProps={{label: "UrlTextField"}}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <Select
        name="select"
        selectProps={{label: "Select"}}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      >
        <MenuItem value={""}>None</MenuItem>
        <MenuItem value={1}>First item</MenuItem>
        <MenuItem value={2}>Second item</MenuItem>
      </Select>

      <Checkbox
        name="checkbox"
        checkboxProps={{label: "Checkbox"}}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <RadioGroup
        name="radioGroup"
        radioGroupProps={{label: "Checkbox"}}
        options={[
          { control: <Radio value="female" />, label: "Female" },
          { control: <Radio value="male" />, label: "Male" },
          { control: <Radio value="other" />, label: "Other" }
        ]}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <Slider
        name="slider"
        sliderProps={{label: "Slider"}}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <Switch
        name="switch"
        switchProps={{label: "Switch"}}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <FormControl>
        <Button type="submit" variant="contained">Submit</Button>
      </FormControl>
    </Form>
  </>
}

export default App
