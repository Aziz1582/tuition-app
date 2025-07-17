// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7wIbYOKUcHWIYM_yHY1ezyQWY6e-tFxY",
  authDomain: "tuition-app-cda63.firebaseapp.com",
  projectId: "tuition-app-cda63",
  storageBucket: "tuition-app-cda63.firebasestorage.app",
  messagingSenderId: "655725464291",
  appId: "1:655725464291:web:b1274c20aa99e4f07813d6",
  measurementId: "G-F2GWXPX48Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
