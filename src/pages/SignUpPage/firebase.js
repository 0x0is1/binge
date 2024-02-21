import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBBHePW7C_cv6CG-SyI7bYz7WFAUugpqf4",
    authDomain: "zero-aa408.firebaseapp.com",
    databaseURL: "https://zero-aa408.firebaseio.com",
    projectId: "zero-aa408",
    storageBucket: "zero-aa408.appspot.com",
    messagingSenderId: "1097299464963",
    appId: "1:1097299464963:web:764324a61dbaea15074f36",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };