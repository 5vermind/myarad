// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "dfmabu.firebaseapp.com",
  projectId: "dfmabu",
  storageBucket: "dfmabu.appspot.com",
  messagingSenderId: "968572148592",
  appId: "1:968572148592:web:e03bd6cbaea404ca8e4db5",
  measurementId: "G-YH9JLQX1KN",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
