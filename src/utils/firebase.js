// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLpBsYnz0kbkkaee0NoWK113tIK1ubnr4",
  authDomain: "netflixgpt-d69cf.firebaseapp.com",
  projectId: "netflixgpt-d69cf",
  storageBucket: "netflixgpt-d69cf.firebasestorage.app",
  messagingSenderId: "131717232384",
  appId: "1:131717232384:web:9c67fa9592a2e63da7e5e5",
  measurementId: "G-TL62BYFFME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();