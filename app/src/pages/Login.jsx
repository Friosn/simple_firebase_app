import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

const Login = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
      </div>
    </Box>
  );
};

export default Login;
