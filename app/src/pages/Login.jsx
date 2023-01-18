import { Link, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

import theme from '../theme';

const Login = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      display="flex"
      flexDirection="column"
      gap="4rem"
      justifyContent="center"
      alignItems="center"
      padding="1rem"
    >
      <Box maxWidth="20rem">
        <img
          src="https://res.cloudinary.com/djaslmpgv/image/upload/v1674056580/Logos/LOGO_MADRID_DELTA_negro_nuevo_pht3cg.png"
          alt="logo madrid-delta"
          className="loginLogo"
        />
      </Box>
      <div>
        <TextField required id="outlined-required" label="Email" />
        <TextField required id="outlined-required" label="Password" />
      </div>
    </Box>
  );
};

export default Login;
