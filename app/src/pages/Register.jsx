import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

const Register = () => {
  const [gender, setGender] = React.useState('');
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    setGender(event.target.value);
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
      <FormControl className="loginForm" sx={{ margin: '1rem', gap: '0.8rem' }}>
        <TextField required id="outlined-required" label="Nombre" />
        <TextField required id="outlined-required" label="Email" />
        <TextField required id="outlined-required" label="Contraseña" />
        <FormControl className="loginForm">
          <InputLabel id="select-gender">Género</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Género"
            onChange={handleChange}
          >
            <MenuItem value={'Hombre'}>Hombre</MenuItem>
            <MenuItem value={'Mujer'}>Mujer</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" sx={{ backgroundColor: 'black' }}>
          Register
        </Button>
      </FormControl>
      <Link href="/">Volver al login</Link>
    </Box>
  );
};

export default Register;
