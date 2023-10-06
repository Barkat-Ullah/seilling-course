// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4EDUlpryfxbfGYhsTtwipiWqikttcJfg",
  authDomain: "education-auth-assignment.firebaseapp.com",
  projectId: "education-auth-assignment",
  storageBucket: "education-auth-assignment.appspot.com",
  messagingSenderId: "132991491633",
  appId: "1:132991491633:web:00d1b4d9986721c1077f10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;