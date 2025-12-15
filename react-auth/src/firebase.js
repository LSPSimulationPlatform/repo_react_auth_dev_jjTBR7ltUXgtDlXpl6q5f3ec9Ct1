// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGH5KY85LRkAeUQ3SLY7i9oJ8HQ-7eHbE",
  authDomain: "test-project-278f4.firebaseapp.com",
  projectId: "test-project-278f4",
  storageBucket: "test-project-278f4.firebasestorage.app",
  messagingSenderId: "958035166352",
  appId: "1:958035166352:web:deda02fd25815819334415",
  measurementId: "G-81GQYSMHC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);