import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDdFtNin9icNQSTrzVz_qpgzjZIxtAoWeM",
  authDomain: "aluminioaaa-bc3c7.firebaseapp.com",
  projectId: "aluminioaaa-bc3c7",
  storageBucket: "aluminioaaa-bc3c7.appspot.com",
  messagingSenderId: "40320969941",
  appId: "1:40320969941:web:09fcd27ac563e226fe065c",
  measurementId: "G-Q2FKD7Z5Q0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)