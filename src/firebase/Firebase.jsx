// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUQLQ6nGLmTLKMNGJf8oGflceiSeS2Efc",
  authDomain: "boredom-ideas.firebaseapp.com",
  projectId: "boredom-ideas",
  storageBucket: "boredom-ideas.appspot.com",
  messagingSenderId: "110235572068",
  appId: "1:110235572068:web:7b760c9d9d6ee947fdcc71",
  measurementId: "G-74WLCFBH08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);