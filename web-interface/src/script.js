// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import { collection, getDocs } from "firebase/firestore"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyL4-gcE80oAhd3XHMugIScXnms1pDPuQ",
  authDomain: "flash-17cb5.firebaseapp.com",
  databaseURL: "https://flash-17cb5-default-rtdb.firebaseio.com",
  projectId: "flash-17cb5",
  storageBucket: "flash-17cb5.appspot.com",
  messagingSenderId: "92154809297",
  appId: "1:92154809297:web:b63c4be349d364b2482ef0",
  measurementId: "G-M61CNDQWVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}



console.log(db);