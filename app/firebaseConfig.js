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
    databaseURL: process.env.databaseURL,
    projectId: "test-1-bcddf",
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  }


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database}