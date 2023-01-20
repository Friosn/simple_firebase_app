import { Button, FormControl, Link, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';

/* import theme from '../theme'; */

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    onLogin({ email, password });
  }

  return (
    <Box noValidate autoComplete="off" className="login">
      <Box maxWidth="20rem">
        <img
          src="https://res.cloudinary.com/djaslmpgv/image/upload/v1674056580/Logos/LOGO_MADRID_DELTA_negro_nuevo_pht3cg.png"
          alt="logo madrid-delta"
          className="loginLogo"
        />
      </Box>
      <Box as="form" onSubmit={handleSubmit} marginTop={4}>
        <FormControl className="loginForm" sx={{ margin: '1rem', gap: '1.2rem' }}>
          <TextField type="email" required id="outlined-required" label="Email" />
          <TextField type="password" required id="outlined-required" label="Password" />
          <Button type="submit" variant="contained" sx={{ backgroundColor: 'black' }}>
            {isLogin ? 'Iniciar sesión' : 'Login'}
          </Button>
        </FormControl>
      </Box>
      <p>Aún no eres un usuario?</p>
      <Link href="/register">Registrate ahora</Link>
    </Box>
  );
};

export default Login;
