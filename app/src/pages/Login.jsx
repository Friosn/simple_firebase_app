import { Button, FormControl, Link, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

/* import theme from '../theme'; */

const Login = () => {
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
          Login
        </Button>
      </FormControl>
      <p>Aún no eres un usuario?</p>
      <Link href="/register">Registrate ahora</Link>
    </Box>
  );
};

export default Login;
