// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-app-lerning.firebaseapp.com",
  projectId: "mern-app-lerning",
  storageBucket: "mern-app-lerning.appspot.com",
  messagingSenderId: "649220656585",
  appId: "1:649220656585:web:ace6269b09207074a9ec18",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
