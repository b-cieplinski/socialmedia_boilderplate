// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
import {getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNFnOxq6GCdKsAcWBZmF1j33WkBCMhbOY",
  authDomain: "ig-clone-77772.firebaseapp.com",
  projectId: "ig-clone-77772",
  storageBucket: "ig-clone-77772.appspot.com",
  messagingSenderId: "395063077909",
  appId: "1:395063077909:web:3b271f64188275cd7db21c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }