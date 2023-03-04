// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwQGNva5hGS0EsG1jPHKeCH-LAlNyPjzs",
  authDomain: "wheres-waldo-30bab.firebaseapp.com",
  projectId: "wheres-waldo-30bab",
  storageBucket: "wheres-waldo-30bab.appspot.com",
  messagingSenderId: "37683158202",
  appId: "1:37683158202:web:241e84bcf45675a36f7683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
