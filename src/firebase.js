// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Y3cYF8_gKv3v-XO8qNP-j3wcMci1ik8",
  authDomain: "document-creator-26f13.firebaseapp.com",
  projectId: "document-creator-26f13",
  storageBucket: "document-creator-26f13.appspot.com",
  messagingSenderId: "781580762099",
  appId: "1:781580762099:web:a50b2b5e32403db99a7086",
  measurementId: "G-Y8JDSZ6ETR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)