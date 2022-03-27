import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD4RtSw4CHzjfKnFeNqL36hhjagylQSaF4",
    authDomain: "pupclub-aecb8.firebaseapp.com",
    projectId: "pupclub-aecb8",
    storageBucket: "pupclub-aecb8.appspot.com",
    messagingSenderId: "84317595510",
    appId: "1:84317595510:web:0dc7487c826d72f67c3c57",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };