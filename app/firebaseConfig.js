// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// First config


// Second config
 // Your web app's Firebase configuration
  // const firebaseConfig = process.env.FIREBASE
  const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: "https://test-1-bcddf-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-1-bcddf",
    storageBucket: "test-1-bcddf.appspot.com",
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  }


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database}