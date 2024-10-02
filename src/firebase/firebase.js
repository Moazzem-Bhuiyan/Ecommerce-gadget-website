// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqMvv926SjFxr96akjqmkIcTPXtYMfZQw",
  authDomain: "form-validation-usecntx.firebaseapp.com",
  projectId: "form-validation-usecntx",
  storageBucket: "form-validation-usecntx.appspot.com",
  messagingSenderId: "41284762833",
  appId: "1:41284762833:web:074d1dc408f9bce749d9f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;