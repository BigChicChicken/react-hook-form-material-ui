# react-hook-form-material-ui

> This package is a simple bridge between react-hook-form and material-ui

[![NPM](https://img.shields.io/npm/v/react-hook-form-material-ui.svg)](https://www.npmjs.com/package/react-hook-form-material-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

| [DOC](/DOC.md) |
| -------------- |

## Install

```bash
npm install --save react-hook-form-material-ui
```

## Usage

```jsximport React from 'react'
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
      onSubmit={handleSubmit}
    >
      <TextField
        name="textField"
        textFieldProps={{label: "TextField"}}
      />

      <FormControl>
        <Button type="submit" variant="contained">Submit</Button>
      </FormControl>
    </Form>
  </>
}
```

## License

MIT © [BigChicChicken](https://github.com/BigChicChicken)
