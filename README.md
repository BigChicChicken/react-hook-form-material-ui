# react-hook-form-material-ui

[![NPM](https://img.shields.io/npm/v/react-hook-form-material-ui.svg)](https://www.npmjs.com/package/react-hook-form-material-ui)

This package is a simple bridge between [react-hook-form](https://react-hook-form.com/) and [material-ui](https://mui.com/)

| [DOC](/DOC.md) |
| -------------- |

## Install

```bash
npm install react-hook-form-material-ui
# or
yarn add react-hook-form-material-ui
```

## Usage

```jsx
import React from 'react'
import Button from '@mui/material/Button'
import { Form, TextField } from 'react-hook-form-material-ui'
import { FormControl } from "@mui/material";

const App = () => {
  const handleSubmit = (data) => {
    console.info("Data submitted:")
    console.info(data)
  }

  return <>
    <Form
      parameters={{
        defaultValues: {
          textField: 'My TextField'
        }
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        name="textField"
        textFieldProps={{ label: "TextField" }}
      />

      <FormControl>
        <Button type="submit" variant="contained">Submit</Button>
      </FormControl>
    </Form>
  </>
}
```

## License

This is completely free and released under the [MIT License](https://github.com/BigChicChicken/react-hook-form-material-ui/blob/main/LICENSE).
