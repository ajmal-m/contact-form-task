// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "test-76193.firebaseapp.com",
  projectId: "test-76193",
  storageBucket: "test-76193.firebasestorage.app",
  messagingSenderId: "1094893950791",
  appId: "1:1094893950791:web:b931a4b4cd7deaddbe5e62",
  measurementId: "G-E2W9XLY5VF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


