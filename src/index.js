import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from "react-router";
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcv40AZwEIt7rcOeUk6kxU_mNnbIzE_J4",
  authDomain: "cooking-forum.firebaseapp.com",
  databaseURL: "https://cooking-forum-default-rtdb.firebaseio.com",
  projectId: "cooking-forum",
  storageBucket: "cooking-forum.appspot.com",
  messagingSenderId: "188904882071",
  appId: "1:188904882071:web:3a166e2b57ab3544d00ed2",
  measurementId: "G-MSPX7YQE2H"
};

firebase.initializeApp(firebaseConfig);

if (window.location.hostname === 'localhost') {
  firebase.auth().useEmulator('http://localhost:9099');
  firebase.database().useEmulator("localhost", 9000);
  firebase.functions.useEmulator('localhost', 5001)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
