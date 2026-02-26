import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ2M07WB7zVJiL02OtiYG-TFp3wdbrmVI",
  authDomain: "healthhub-2ff6e.firebaseapp.com",
  projectId: "healthhub-2ff6e",
  storageBucket: "healthhub-2ff6e.firebasestorage.app",
  messagingSenderId: "371731984767",
  appId: "1:371731984767:web:254c9bfa1253ea6a0baa4a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);