// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAgTDGBl1BqRaqEIRnBreptVsdZMe3WvdA",
  authDomain: "test-esp32-tds.firebaseapp.com",
  databaseURL: "https://test-esp32-tds-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "test-esp32-tds",
  storageBucket: "test-esp32-tds.appspot.com",
  messagingSenderId: "150916913301",
  appId: "1:150916913301:web:b8e101478967c6fa64e39c",
  measurementId: "G-KEG57THZ0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database}