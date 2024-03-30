// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuPGT7jkeoDY7d03zIJPYL5Nsv022K7AI",
  authDomain: "portfolio-app-2f621.firebaseapp.com",
  projectId: "portfolio-app-2f621",
  storageBucket: "portfolio-app-2f621.appspot.com",
  messagingSenderId: "164282744685",
  appId: "1:164282744685:web:47cce7ee9e1d564b14a464",
  measurementId: "G-25TSGRGY21",
  databaseURL:"https://portfolio-app-2f621-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);