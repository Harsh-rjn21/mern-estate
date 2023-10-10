// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2ff73.firebaseapp.com",
  projectId: "mern-estate-2ff73",
  storageBucket: "mern-estate-2ff73.appspot.com",
  messagingSenderId: "351007606644",
  appId: "1:351007606644:web:d549dbfbcb3fb49725ce21",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
