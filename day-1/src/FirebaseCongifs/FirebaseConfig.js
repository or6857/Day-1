// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBaocFDnMpoEOIXVbev2mYOkOcDJcFL6Ak",
  authDomain: "e-commerce-a5a7c.firebaseapp.com",
  projectId: "e-commerce-a5a7c",
  storageBucket: "e-commerce-a5a7c.appspot.com",
  messagingSenderId: "492430071315",
  appId: "1:492430071315:web:d3557bf35e620a039791e6",
  measurementId: "G-VTKJQTL6R7",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const db = getStorage(app);
