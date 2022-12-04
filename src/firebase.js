// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS--DYC-isN1XPWlafuoaYrtI7WG37QJs",
  authDomain: "mifo-1a470.firebaseapp.com",
  projectId: "mifo-1a470",
  storageBucket: "mifo-1a470.appspot.com",
  messagingSenderId: "821944771522",
  appId: "1:821944771522:web:e0ab154511767a6209ec5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
