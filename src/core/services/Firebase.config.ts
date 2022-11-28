// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5Ir-CjFyPUX4EIQ6wkVMA3Op2s6dNRw8",
    authDomain: "wear-it-feel-it.firebaseapp.com",
    projectId: "wear-it-feel-it",
    storageBucket: "wear-it-feel-it.appspot.com",
    messagingSenderId: "51931381860",
    appId: "1:51931381860:web:5f8a3dfc990edb4f529f71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider =new  GoogleAuthProvider