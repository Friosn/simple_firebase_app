import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import { Container } from '@mui/system';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import OAuth from '../components/OAuth';
import { db } from '../firebase';

const Register = () => {
  const [gender, setGender] = React.useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const onChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Blabla');
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
      const user = userCredential.user;
      console.log(user);
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      navigate('/home');
    } catch (error) {
      <Alert severity="error">Something went wrong with registration</Alert>;
    }
  };

  return (
    <Container noValidate autoComplete="off" className="login">
      <Box maxWidth="20rem">
        <img
          src="https://res.cloudinary.com/djaslmpgv/image/upload/v1674056580/Logos/LOGO_MADRID_DELTA_negro_nuevo_pht3cg.png"
          alt="logo madrid-delta"
          className="loginLogo"
        />
      </Box>
      <form>
        <FormControl
          onSubmit={onSubmit}
          className="loginForm"
          sx={{ m: 1, width: '25ch' }}
        >
          <TextField required id="name" label="Nombre" value={name} onChange={onChange} />
        </FormControl>
        <FormControl
          onSubmit={onSubmit}
          className="loginForm"
          sx={{ m: 1, width: '25ch' }}
        >
          <TextField
            required
            id="email"
            label="Email"
            value={email}
            onChange={onChange}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch', height: '3rem' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="gender">Género</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="gender"
            value={gender}
            onChange={handleChange}
            label="Género"
            required
            placeholder="Género"
          >
            <MenuItem value={'Hombre'}>Hombre</MenuItem>
            <MenuItem value={'Mujer'}>Mujer</MenuItem>
          </Select>

          <Button type="submit" variant="contained" sx={{ backgroundColor: 'black' }}>
            Register
          </Button>
          <Link href="/">Volver al login</Link>
        </FormControl>

        <OAuth />
      </form>
    </Container>
  );
};

export default Register;
