import React from 'react'
import Button from '@mui/material/Button'
import {
  Form,
  TextField,
  EmailTextField,
  PasswordTextField,
  UrlTextField,
  Select,
  Checkbox,
  RadioGroup,
  Slider,
  Switch,
  Collection
} from 'react-hook-form-material-ui'
import { FormControl, Grid, MenuItem } from "@mui/material";

const ErrorMessages = {
  required: "This field is required.",
  isEmail: "This field is not an email.",
  isUrl: "This field is not an URL.",
  hasUppercase: "This field must have one uppercase",
  hasLowercase: "This field must have one lowercase",
  hasDigit: "This field must have one digit",
  hasSpecialCharacter: "This field must have one special character"
}

const App = () => {
  const formRef = React.createRef();

  const handleSubmit = (data) => {
    console.info("Data submitted:")
    console.info(data)
  }

  const handleReset = (e) => {
    const { current: { props: { form: { reset } } } } = formRef

    reset()
    e.preventDefault()
  }

  return <>
    <Form
      forwardedRef={formRef}
      onSubmit={handleSubmit}
      parameters={{
        mode: "all",
        defaultValues: {
          textField: "My TextField",
          emailTextField: "my.email@email.com",
          passwordTextField: "My.password!1234",
          urlTextField: "https://root:root@my.url.com:8080/target?foo=bar",
          select: 1,
          checkbox: true,
          radioGroup: "male",
          slider: 45,
          switch: true,
          collection: [
            { speech: 'Harder' },
            { speech: 'Better' },
            { speech: 'Faster' },
            { speech: 'Stronger' }
          ]
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

      <PasswordTextField
        name="passwordTextField"
        passwordDifficulty="complex"
        textFieldProps={{label: "PasswordTextField"}}
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
          {value: 'female', label: "Female"},
          {value: 'male', label: "Male"},
          {value: 'other', label: "Other"}
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

      <Collection
        name="collection"
        cardHeaderProps={{
          title: "Speechs"
        }}
        fieldsRender={ ({fields, remove}) => (
          <Grid container direction="column" spacing={2}>
            { fields.map(({id, speech}, index) => (
              <Grid key={id} item>
                <TextField
                  name={ `collection[${ index }][speech]` }
                  textFieldProps={{
                    fullWidth: true
                  }}
                  RegisterOptions={{
                    required: true
                  }}
                  ErrorMessages={ErrorMessages}
                />
                <Button onClick={() => remove(index)}>Remove</Button>
              </Grid>
            )) }
          </Grid>
        ) }
        buttonsRender={ ({append, prepend}) => (<>
          <Button onClick={ () => append({ speech: '' })}>Append</Button>
          <Button onClick={ () => prepend({ speech: '' })}>Prepend</Button>
        </>) }
      />

      <FormControl>
        <Button type="reset" variant="outlined" onClick={handleReset}>Reset</Button>
      </FormControl>

      <FormControl>
        <Button type="submit" variant="contained">Submit</Button>
      </FormControl>
    </Form>
  </>
}

export default App
