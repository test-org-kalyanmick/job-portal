// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDloBbg1NGIFacr4S15wTpetLC2zbUFTuo",
  authDomain: "test-proj-001-42b67.firebaseapp.com",
  projectId: "test-proj-001-42b67",
  storageBucket: "test-proj-001-42b67.appspot.com",
  messagingSenderId: "907765166620",
  appId: "1:907765166620:web:b827f6b43cb0b378efe5d9",
  measurementId: "G-KLT8TTLERK"
};

// Initialize Firebase
console.log("Firebase getapps", firebase.getApps());
const app = !firebase.getApps().length ? initializeApp(firebaseConfig): firebase.getApps()[0];
console.log("Firebase app", app);
// const analytics = getAnalytics(app);

export default firebase;
