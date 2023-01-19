import { Box, Button, FormControl, Link, TextField } from '@mui/material';
import React from 'react';

const Register = () => {
  return (
    <Box noValidate autoComplete="off" className="login">
      <Box maxWidth="20rem">
        <img
          src="https://res.cloudinary.com/djaslmpgv/image/upload/v1674056580/Logos/LOGO_MADRID_DELTA_negro_nuevo_pht3cg.png"
          alt="logo madrid-delta"
          className="loginLogo"
        />
      </Box>
      <FormControl className="loginForm" sx={{ margin: '1rem', gap: '1.2rem' }}>
        <TextField required id="outlined-required" label="Email" />
        <TextField required id="outlined-required" label="Password" />
        <Button variant="contained" sx={{ backgroundColor: 'black' }}>
          Register
        </Button>
      </FormControl>
      <Link href="/">Volver al login</Link>
    </Box>
  );
};

export default Register;
