// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOyETDvol9CUKhAXjKTSYv6HGOcxVpYxI",
  authDomain: "netflixgpt-679b7.firebaseapp.com",
  projectId: "netflixgpt-679b7",
  storageBucket: "netflixgpt-679b7.appspot.com",
  messagingSenderId: "1024745042741",
  appId: "1:1024745042741:web:db9717a713724d7193127c",
  measurementId: "G-87CS17NSWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()