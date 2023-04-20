import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6VIxpRZYXEDXNF8_Syq1YhHfhlLlCDI0",
    authDomain: "chatgpt-messenger-f8fb0.firebaseapp.com",
    projectId: "chatgpt-messenger-f8fb0",
    storageBucket: "chatgpt-messenger-f8fb0.appspot.com",
    messagingSenderId: "471825707224",
    appId: "1:471825707224:web:5adf52a82b4fa10779a7ad"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }