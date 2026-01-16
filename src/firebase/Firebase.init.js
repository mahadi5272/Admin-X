// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGjgfEnedS2GyCHAVw3DE1tRlOOEuva_E",
  authDomain: "admin-x-8e2e8.firebaseapp.com",
  projectId: "admin-x-8e2e8",
  storageBucket: "admin-x-8e2e8.firebasestorage.app",
  messagingSenderId: "706673244820",
  appId: "1:706673244820:web:909f2e14244cafba7f5281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);