// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwJMnu9vhxZEkirbVKjOPHm2-LOEx7XFc",
  authDomain: "tree-app-54d91.firebaseapp.com",
  projectId: "tree-app-54d91",
  databaseURL:"https://tree-app-54d91-default-rtdb.firebaseio.com",
  storageBucket: "tree-app-54d91.appspot.com",
  messagingSenderId: "871131790886",
  appId: "1:871131790886:web:3d6f8457bd2a52d6dcb0e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase();


