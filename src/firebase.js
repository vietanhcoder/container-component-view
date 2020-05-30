// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

const config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */

  apiKey: 'AIzaSyD9CrzHUXhV8keURQbJVJA0OFn58V3Q3aM',
  authDomain: 'guru-t1811.firebaseapp.com',
  databaseURL: 'https://guru-t1811.firebaseio.com',
  projectId: 'guru-t1811',
  storageBucket: 'guru-t1811.appspot.com',
  messagingSenderId: '119799992728',
  appId: '1:119799992728:web:d1a59fd7664c463aa99bed',
  measurementId: 'G-KSTY6CS2QL',
};

// Initialize Firebase
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
