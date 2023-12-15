import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdFtNin9icNQSTrzVz_qpgzjZIxtAoWeM",
  authDomain: "aluminioaaa-bc3c7.firebaseapp.com",
  projectId: "aluminioaaa-bc3c7",
  storageBucket: "aluminioaaa-bc3c7.appspot.com",
  messagingSenderId: "40320969941",
  appId: "1:40320969941:web:09fcd27ac563e226fe065c",
  measurementId: "G-Q2FKD7Z5Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)