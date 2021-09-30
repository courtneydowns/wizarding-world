import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp({
  apiKey: "AIzaSyB6-iV1J4ZiZiFAXOtXqzfcCsc3U9KYQ2E",
  authDomain: "wizarding-world-75b4a.firebaseapp.com",
  databaseURL: "https://wizarding-world-75b4a-default-rtdb.firebaseio.com",
  projectId: "wizarding-world-75b4a",
  storageBucket: "wizarding-world-75b4a.appspot.com",
  messagingSenderId: "994704611406",
  appId: "1:994704611406:web:2ec182d5da38a7e72e0b1f",
  measurementId: "G-M74E5EZN1D",
});
getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
