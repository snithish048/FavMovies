// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf54we1fwuKdLPReX0PDDXq_ymoNweDmc",
  authDomain: "favmovies-815b5.firebaseapp.com",
  projectId: "favmovies-815b5",
  storageBucket: "favmovies-815b5.appspot.com",
  messagingSenderId: "286480992978",
  appId: "1:286480992978:web:55a53030f3007eeece7b0b",
  measurementId: "G-1KW372W094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);