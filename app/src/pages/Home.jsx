import { Button } from '@mui/material';
import React from 'react';

import firebase from '../config/firebase';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Button onClick={() => firebase.auth().signOut()}>Log out</Button>
    </>
  );
};

export default Home;
