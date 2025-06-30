// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKP2X62T4OMJLDoh2mcKeJ4WjItQEQYxM",
  authDomain: "practica3-2-18991.firebaseapp.com",
  projectId: "practica3-2-18991",
  storageBucket: "practica3-2-18991.firebasestorage.app",
  messagingSenderId: "489222467842",
  appId: "1:489222467842:web:c4faf6e8d04652c8b9921b",
  measurementId: "G-FP8F5JCNN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
