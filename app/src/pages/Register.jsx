import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import OAuth from '../components/OAuth';
import { db } from '../firebase';

const Register = () => {
  const [gender, setGender] = React.useState('');
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;

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

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
      const user = userCredential.user;

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
    <Box noValidate autoComplete="off" className="login">
      <Box maxWidth="20rem">
        <img
          src="https://res.cloudinary.com/djaslmpgv/image/upload/v1674056580/Logos/LOGO_MADRID_DELTA_negro_nuevo_pht3cg.png"
          alt="logo madrid-delta"
          className="loginLogo"
        />
      </Box>
      <FormControl
        onSubmit={onSubmit}
        className="loginForm"
        sx={{ margin: '1rem', gap: '0.8rem' }}
      >
        <TextField required id="name" label="Nombre" value={name} onChange={onChange} />
        <TextField required id="email" label="Email" value={email} onChange={onChange} />
        <TextField
          required
          id="password"
          label="Contraseña"
          value={password}
          onChange={onChange}
          type={showPass ? 'text' : 'password'}
        />
        {showPass ? (
          <AiFillEyeInvisible
            onClick={() => setShowPass((previousState) => !previousState)}
          />
        ) : (
          <AiFillEye onClick={() => setShowPass((previousState) => !previousState)} />
        )}
        <FormControl className="registerForm">
          <InputLabel id="select-gender">Género</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="gender"
            value={gender}
            onChange={handleChange}
            label="Género"
            required
          >
            <MenuItem value={'Hombre'}>Hombre</MenuItem>
            <MenuItem value={'Mujer'}>Mujer</MenuItem>
          </Select>
        </FormControl>
        <Link href="/">Volver al login</Link>
        <Button variant="contained" sx={{ backgroundColor: 'black' }}>
          Register
        </Button>
        <OAuth />
      </FormControl>
    </Box>
  );
};

export default Register;
