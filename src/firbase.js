import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCqLo-qL8Ve_cgys68EN5VJbBzynVLmBzc",
  authDomain: "cart-3cc76.firebaseapp.com",
  databaseURL: "https://cart-3cc76-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cart-3cc76",
  storageBucket: "cart-3cc76.appspot.com",
  messagingSenderId: "462399975067",
  appId: "1:462399975067:web:36d8fe9e4d8061d745e03e",
  measurementId: "G-5TS3H8YSM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app) ;