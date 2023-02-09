import { Alert } from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react';

import { db } from '../firebase';
const OAuth = () => {
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const user = result.user;

      const docRef = doc(db, 'users', user.uid);

      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      {
        <Alert severity="success">Successful Login</Alert>;
      }
    } catch (error) {
      <Alert severity="error">Impossible to log in</Alert>;
    }
  };
  return <div>OAuth</div>;
};

export default OAuth;
