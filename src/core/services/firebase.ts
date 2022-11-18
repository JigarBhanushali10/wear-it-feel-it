// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 function initializeApp(configuration:any){
    return configuration
 }
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
export const app = initializeApp(firebaseConfig);