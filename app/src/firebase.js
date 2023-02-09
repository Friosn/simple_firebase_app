import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyARNLAxpBOt13T6D-O8Y8KqxrDPpzoiigM',
  authDomain: 'learning-firebase-6b39c.firebaseapp.com',
  projectId: 'learning-firebase-6b39c',
  storageBucket: 'learning-firebase-6b39c.appspot.com',
  messagingSenderId: '624551616874',
  appId: '1:624551616874:web:27b7b49236f5bc8810c513',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
