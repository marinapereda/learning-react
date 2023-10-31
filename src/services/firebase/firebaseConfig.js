import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDughS6xAxYq-z9i99TdxLd4UvmykUIy7E",
  authDomain: "iloveaireact.firebaseapp.com",
  projectId: "iloveaireact",
  storageBucket: "iloveaireact.appspot.com",
  messagingSenderId: "3803304944",
  appId: "1:3803304944:web:98bcf57f7ec41971664335",
  measurementId: "G-FPL0HYBVLS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
