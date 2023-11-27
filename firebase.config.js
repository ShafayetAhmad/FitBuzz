// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUeEynwTfOTd69FBuHdSqufvPLReFFzAA",
  authDomain: "fitbuzz-316d8.firebaseapp.com",
  projectId: "fitbuzz-316d8",
  storageBucket: "fitbuzz-316d8.appspot.com",
  messagingSenderId: "1061525393122",
  appId: "1:1061525393122:web:b7d13ce6785591bfda58bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
