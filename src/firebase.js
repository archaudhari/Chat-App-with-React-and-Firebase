// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBqMoXIvfJFwSH_4Geb4cmQ-o4UWASP5HI',
  authDomain: 'react-chat-bb369.firebaseapp.com',
  projectId: 'react-chat-bb369',
  storageBucket: 'react-chat-bb369.appspot.com',
  messagingSenderId: '259156928461',
  appId: '1:259156928461:web:ce29e0c9d5df620eda8684',
  measurementId: 'G-GMPR2MWK3G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
