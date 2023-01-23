import { Button, FormControl, Link, TextareaAutosize, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useState } from 'react';

import firebase from '../config/firebase';

/* import theme from '../theme'; */

/* const auth = getAuth(); */

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    setError(null);

    if (!isLogin) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const newUser = {
            id: userCredential.user.uid,
            email: userCredential.user.email,
          };
          onLogin(newUser);
        })
        .catch((err) => {
          console.log('Error createUserWithEmailAndPassword:', err.message);
          setError(err.message);
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const newUser = {
            id: userCredential.user.uid,
            email: userCredential.user.email,
          };
          onLogin(newUser);
        })
        .catch((err) => {
          console.log('Error signInWithEmailAndPassword:', err.message);
          setError(err.message);
        });
    }
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
        <FormControl id="email" sx={{ margin: '1rem', gap: '1.2rem' }} required>
          <TextField type="email" required id="outlined-required" label="Email" />
        </FormControl>
        <FormControl id="password" sx={{ margin: '1rem', gap: '1.2rem' }} required>
          <TextField type="password" required id="outlined-required" label="Password" />
        </FormControl>
        <Button type="submit" variant="contained" sx={{ backgroundColor: 'black' }}>
          {isLogin ? 'Iniciar sesión' : 'Login'}
        </Button>
        {error ? <TextareaAutosize color="red">{error}</TextareaAutosize> : null}
      </Box>
      <p>Aún no eres un usuario?</p>
      <Link href="/register">Registrate ahora</Link>
    </Box>
  );
};

export default Login;
