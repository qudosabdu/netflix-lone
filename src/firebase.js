// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// firebase.js
const firebaseConfig = {    
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,

  };
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCcEtS-fUlJ80t69mFf_XBLGVeHj4baIwE",
//   authDomain: "netflix-clone-1cd11.firebaseapp.com",
//   projectId: "netflix-clone-1cd11",
//   storageBucket: "netflix-clone-1cd11.appspot.com",
//   messagingSenderId: "489273707492",
//   appId: "1:489273707492:web:91f9891c6f23dc5f3115f1"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);