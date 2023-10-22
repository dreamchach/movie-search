// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArNbDWLFOTVOGmxnjKkwwUXCGGyOsD4Z0",
  authDomain: "movie-search-fe338.firebaseapp.com",
  projectId: "movie-search-fe338",
  storageBucket: "movie-search-fe338.appspot.com",
  messagingSenderId: "950480049184",
  appId: "1:950480049184:web:bc5c646a21517f7f75d845",
  measurementId: "G-D6W6BQ3J95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)