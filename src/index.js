import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD33K0ZTDHbIZ-I2gataxj_dp-zqJOdEj0",
  authDomain: "wish-him.firebaseapp.com",
  projectId: "wish-him",
  storageBucket: "wish-him.appspot.com",
  messagingSenderId: "654304093540",
  appId: "1:654304093540:web:3db6b0b3fddf5860ab8671"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

