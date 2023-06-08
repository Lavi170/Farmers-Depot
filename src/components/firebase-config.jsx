// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXUny0HFxjSn62U_FLCPTUaCznUMzU7bA",
  authDomain: "farmers-depot.firebaseapp.com",
  projectId: "farmers-depot",
  storageBucket: "farmers-depot.appspot.com",
  messagingSenderId: "322016143018",
  appId: "1:322016143018:web:e66e65eb441d0e2ef712d3",
  measurementId: "G-DSYL8HDYTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app);
  export const googleProvider=new GoogleAuthProvider();
  export const db =getFirestore(app);