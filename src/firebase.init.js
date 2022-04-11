// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO:  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8x-QYtSx9PKl7PIqOVxBJNVOQvL0KqWQ",
    authDomain: "ema-john-simple-3a27f.firebaseapp.com",
    projectId: "ema-john-simple-3a27f",
    storageBucket: "ema-john-simple-3a27f.appspot.com",
    messagingSenderId: "615938572652",
    appId: "1:615938572652:web:a5da7162243813b4b93349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;