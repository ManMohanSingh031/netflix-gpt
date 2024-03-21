// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpHJTVsUTkWQJvggUYoOVjyixQwfTS1B0",
  authDomain: "netflix-gpt-70c84.firebaseapp.com",
  projectId: "netflix-gpt-70c84",
  storageBucket: "netflix-gpt-70c84.appspot.com",
  messagingSenderId: "40728573574",
  appId: "1:40728573574:web:3ac06cba39dbc84fe40307",
  measurementId: "G-VLME45C9MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();