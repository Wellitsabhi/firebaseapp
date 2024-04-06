// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// First config
//   const firebaseConfig = {
//   apiKey: "AIzaSyAgTDGBl1BqRaqEIRnBreptVsdZMe3WvdA",
//   authDomain: "test-esp32-tds.firebaseapp.com",
//   databaseURL: "https://test-esp32-tds-default-rtdb.asia-southeast1.firebasedatabase.app/",
//   projectId: "test-esp32-tds",
//   storageBucket: "test-esp32-tds.appspot.com",
//   messagingSenderId: "150916913301",
//   appId: "1:150916913301:web:b8e101478967c6fa64e39c",
//   measurementId: "G-KEG57THZ0T"
// };

// Second config
 // Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyC6PsQgnGNwQTQkOpTKOMO4MuQ7yQzYiVI",
  authDomain: "test-1-bcddf.firebaseapp.com",
  databaseURL: "https://test-1-bcddf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-1-bcddf",
  storageBucket: "test-1-bcddf.appspot.com",
  messagingSenderId: "977777408468",
  appId: "1:977777408468:web:e7b84469b4d92e1a93be41"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database}