import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2FypfYiQLB-RkPjgWfcCDF8hMsEKKB3A",
    authDomain: "sansung-8c974.firebaseapp.com",
    projectId: "sansung-8c974",
    storageBucket: "sansung-8c974.appspot.com",
    messagingSenderId: "774745576",
    appId: "1:774745576:web:e0a01c74adb51b8747085d",
    measurementId: "G-4PQS9WLVLS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)