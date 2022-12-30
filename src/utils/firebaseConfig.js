// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAblfJesnTBhmz0oVLaU6t3qfTTk36Eck",
  authDomain: "ecommerce-software-reactjs.firebaseapp.com",
  projectId: "ecommerce-software-reactjs",
  storageBucket: "ecommerce-software-reactjs.appspot.com",
  messagingSenderId: "867770844225",
  appId: "1:867770844225:web:f76cef992e6dc5ac30f2c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
