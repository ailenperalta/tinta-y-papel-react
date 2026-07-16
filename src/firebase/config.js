// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0YPyGnefo_aXX29XHP-fjibSGlI_uE84",
  authDomain: "proyecto-react-dfb98.firebaseapp.com",
  projectId: "proyecto-react-dfb98",
  storageBucket: "proyecto-react-dfb98.firebasestorage.app",
  messagingSenderId: "194802354644",
  appId: "1:194802354644:web:f7f14e507c903ae39dae41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };