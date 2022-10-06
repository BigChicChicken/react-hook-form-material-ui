import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  Form,
  FormProps,
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
} from '../.'
import {
  Button,
  FormControl,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

const ErrorMessages = {
  required: 'This field is required.',
  isEmail: 'This field is not an email.',
  isUrl: 'This field is not an URL.',
  hasUppercase: 'This field must have one uppercase',
  hasLowercase: 'This field must have one lowercase',
  hasDigit: 'This field must have one digit',
  hasSpecialCharacter: 'This field must have one special character'
}

const App = () => {
  const formRef = React.createRef<{ props: FormProps }>()

  const handleSubmit = (data: any) => {
    console.info('Data submitted:')
    console.info(data)
  }

  const handleReset = (e: { preventDefault: () => void }) => {
    const form = formRef.current

    if (form) {
      const {
        props: {
          form: { reset }
        }
      } = form
      reset()
    }
    e.preventDefault()
  }

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      parameters={{
        mode: 'all',
        defaultValues: {
          textField: 'My TextField',
          emailTextField: 'my.email@email.com',
          passwordTextField: 'My.password!1234',
          urlTextField: 'https://root:root@my.url.com:8080/target?foo=bar',
          select: 1,
          checkbox: true,
          radioGroup: 'male',
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
        name='textField'
        textFieldProps={{ label: 'TextField' }}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <EmailTextField
        name='emailTextField'
        textFieldProps={{ label: 'EmailTextField' }}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <PasswordTextField
        name='passwordTextField'
        textFieldProps={{ label: 'PasswordTextField' }}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
        passwordDifficulty='complex'
      />

      <UrlTextField
        name='urlTextField'
        textFieldProps={{ label: 'UrlTextField' }}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <Select
        name='select'
        selectProps={{ label: 'Select' }}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      >
        <MenuItem value=''>None</MenuItem>
        <MenuItem value={1}>First item</MenuItem>
        <MenuItem value={2}>Second item</MenuItem>
      </Select>

      <Checkbox
        name='checkbox'
        checkboxProps={{ label: 'Checkbox' }}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <RadioGroup
        name='radioGroup'
        radioGroupProps={{ label: 'Checkbox' }}
        options={[
          { value: 'female', label: 'Female' },
          { value: 'male', label: 'Male' },
          { value: 'other', label: 'Other' }
        ]}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <Slider
        name='slider'
        sliderProps={{ label: 'Slider' }}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <Switch
        name='switch'
        switchProps={{ label: 'Switch' }}
        RegisterOptions={{
          required: true
        }}
        ErrorMessages={ErrorMessages}
      />

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant='h5'>Speechs</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <Collection
            name='collection'
            fieldsRender={({ fields, remove }) => (
              <TableBody>
                {fields.map(({ id, speech }, index) => (
                  <TableRow key={id}>
                    <TableCell>
                      <TextField
                        name={`collection[${index}][speech]`}
                        textFieldProps={{
                          fullWidth: true
                        }}
                        RegisterOptions={{
                          required: true
                        }}
                        ErrorMessages={ErrorMessages}
                      />
                    </TableCell>

                    <TableCell style={{ width: 0 }}>
                      <Button onClick={() => remove(index)}>Remove</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
            buttonsRender={({ append, prepend }) => (
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Button onClick={() => append({ speech: '' })}>
                      Append
                    </Button>
                    <Button onClick={() => prepend({ speech: '' })}>
                      Prepend
                    </Button>
                  </TableCell>
                </TableRow>
              </TableFooter>
            )}
          />
        </Table>
      </Paper>

      <FormControl>
        <Button type='reset' variant='outlined' onClick={handleReset}>
          Reset
        </Button>
      </FormControl>

      <FormControl>
        <Button type='submit' variant='contained'>
          Submit
        </Button>
      </FormControl>
    </Form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
